from __future__ import annotations

from collections.abc import AsyncIterator

from sqlalchemy import text
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from .config import get_settings


engine: AsyncEngine | None = None
SessionLocal: async_sessionmaker[AsyncSession] | None = None


def init_engine() -> AsyncEngine:
    global engine, SessionLocal

    if engine is None:
        settings = get_settings()
        engine = create_async_engine(
            settings.database_url,
            pool_size=settings.pool_size,
            max_overflow=settings.max_overflow,
            pool_pre_ping=True,
            pool_recycle=1800,
        )
        SessionLocal = async_sessionmaker(engine, expire_on_commit=False)

    return engine


async def get_session() -> AsyncIterator[AsyncSession]:
    if SessionLocal is None:
        init_engine()

    if SessionLocal is None:
        raise RuntimeError("Database session factory is not initialized")

    async with SessionLocal() as session:
        yield session


async def verify_database() -> None:
    db_engine = init_engine()

    async with db_engine.connect() as connection:
        table_exists = await connection.scalar(
            text(
                """
                SELECT EXISTS (
                    SELECT 1
                    FROM information_schema.tables
                    WHERE table_schema = 'public'
                      AND table_name = 'waitlist_users'
                )
                """
            )
        )

    if not table_exists:
        raise RuntimeError("Required table 'waitlist_users' does not exist")


async def close_engine() -> None:
    global engine, SessionLocal

    if engine is not None:
        await engine.dispose()
        engine = None
        SessionLocal = None
