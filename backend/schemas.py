from __future__ import annotations

from pydantic import BaseModel, field_validator


class WaitlistSignup(BaseModel):
    name: str
    email: str

    @field_validator("name")
    @classmethod
    def validate_name(cls, value: str) -> str:
        cleaned = value.strip()
        if not cleaned:
            raise ValueError("Name is required")
        return cleaned

    @field_validator("email")
    @classmethod
    def validate_email(cls, value: str) -> str:
        cleaned = value.strip().lower()
        if not cleaned or "@" not in cleaned:
            raise ValueError("Valid email is required")
        return cleaned
