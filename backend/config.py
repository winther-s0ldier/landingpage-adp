from __future__ import annotations

import os
from dataclasses import dataclass
from functools import lru_cache


DEFAULT_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]


@dataclass(frozen=True)
class Settings:
    database_url: str
    allowed_origins: list[str]
    pool_size: int
    max_overflow: int


def _normalize_database_url(database_url: str) -> str:
    if database_url.startswith("postgresql+psycopg://"):
        return database_url

    if database_url.startswith("postgresql://"):
        return database_url.replace("postgresql://", "postgresql+psycopg://", 1)

    raise RuntimeError("DATABASE_URL must start with 'postgresql://'")


@lru_cache
def get_settings() -> Settings:
    raw_database_url = os.getenv("DATABASE_URL")
    if not raw_database_url:
        raise RuntimeError("DATABASE_URL environment variable is required")

    raw_origins = os.getenv("ALLOWED_ORIGINS", "")
    allowed_origins = [
        origin.strip() for origin in raw_origins.split(",") if origin.strip()
    ] or DEFAULT_ALLOWED_ORIGINS

    return Settings(
        database_url=_normalize_database_url(raw_database_url),
        allowed_origins=allowed_origins,
        pool_size=int(os.getenv("DB_POOL_SIZE", "5")),
        max_overflow=int(os.getenv("DB_MAX_OVERFLOW", "10")),
    )
