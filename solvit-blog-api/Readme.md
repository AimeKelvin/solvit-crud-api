### POST /api/auth/register
Registers a new user

**Body:**
{
  "username": "john",
  "password": "secret123",
  "role": "author"
}

**Returns:**
{
  "token": "eyJhbGciOi..."
}
