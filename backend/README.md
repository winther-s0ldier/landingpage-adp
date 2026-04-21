# FastAPI Waitlist Backend

This backend connects to your existing Neon PostgreSQL database and writes to the existing `waitlist_users` table only. It does not create a new database or table.

## Project structure

- `backend/config.py` - environment config and CORS settings
- `backend/db.py` - async SQLAlchemy engine and pooled session handling
- `backend/schemas.py` - request schema validation
- `backend/main.py` - FastAPI app and `/api/waitlist` endpoint

## Environment variables

Set these before starting the server:

```powershell
$env:DATABASE_URL="postgresql://<user>:<password>@<host>/<database>?sslmode=require&channel_binding=require"
```

Optional:

```powershell
$env:ALLOWED_ORIGINS="http://localhost:5173,http://127.0.0.1:5173"
$env:DB_POOL_SIZE="5"
$env:DB_MAX_OVERFLOW="10"
```

The `DATABASE_URL` is converted internally to SQLAlchemy's async Psycopg URL format while preserving your Neon SSL parameters.

## Run locally

1. Create a virtual environment:

   ```powershell
   python -m venv .venv
   ```

2. Activate it:

   ```powershell
   .\.venv\Scripts\Activate.ps1
   ```

3. Install dependencies:

   ```powershell
   pip install -r backend/requirements.txt
   ```

4. Start the server:

   ```powershell
   uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
   ```

The API will be available at `http://localhost:8000/api/waitlist`.

## Example request

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```
