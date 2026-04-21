from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sqlalchemy import text
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession

from config import get_settings
from db import close_engine, get_session, init_engine, verify_database
from schemas import WaitlistSignup


@asynccontextmanager
async def lifespan(_: FastAPI):
    init_engine()
    await verify_database()
    yield
    await close_engine()


settings = get_settings()
app = FastAPI(title="Adopshun Waitlist API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/waitlist")
async def create_waitlist_entry(
    payload: WaitlistSignup,
    session: AsyncSession = Depends(get_session),
):
    try:
        await session.execute(
            text(
                """
                INSERT INTO waitlist_users (name, email)
                VALUES (:name, :email)
                """
            ),
            {"name": payload.name, "email": payload.email},
        )
        await session.commit()
    except IntegrityError as exc:
        await session.rollback()
        sqlstate = getattr(getattr(exc, "orig", None), "sqlstate", None)
        if sqlstate == "23505":
            return JSONResponse(
                status_code=status.HTTP_409_CONFLICT,
                content={"error": "Email already registered"},
            )

        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"error": "Database error"},
        )

    return {"success": True}
