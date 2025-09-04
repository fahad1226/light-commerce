# Authentication System Documentation

## Overview

This project implements a robust authentication system for a Nike-style e-commerce application using Next.js, PostgreSQL, Drizzle ORM, and Better Auth patterns. The system supports both authenticated users and guests with seamless guest-to-user transitions.

## Architecture

### Database Schema

The authentication system uses the following database tables:

#### Core Auth Tables (Better Auth Compatible)

1. **`user`** - User accounts

    - `id`: UUID (primary key)
    - `name`: String (optional)
    - `email`: String (unique, required)
    - `emailVerified`: Boolean (default: false)
    - `image`: String (optional)
    - `createdAt`: Timestamp
    - `updatedAt`: Timestamp

2. **`session`** - User sessions

    - `id`: UUID (primary key)
    - `userId`: UUID (foreign key to user.id)
    - `token`: String (unique, required)
    - `ipAddress`: String (optional)
    - `userAgent`: String (optional)
    - `expiresAt`: Timestamp (required)
    - `createdAt`: Timestamp
    - `updatedAt`: Timestamp

3. **`account`** - Authentication providers

    - `id`: UUID (primary key)
    - `userId`: String (foreign key to user.id)
    - `accountId`: String (required)
    - `providerId`: String (required, e.g., "credentials", "google")
    - `accessToken`: String (optional)
    - `refreshToken`: String (optional)
    - `accessTokenExpiresAt`: Timestamp (optional)
    - `refreshTokenExpiresAt`: Timestamp (optional)
    - `scope`: String (optional)
    - `idToken`: String (optional)
    - `password`: String (optional, for credentials login)
    - `createdAt`: Timestamp
    - `updatedAt`: Timestamp

4. **`verification`** - Email verification tokens
    - `id`: UUID (primary key)
    - `identifier`: String (required, e.g., email)
    - `value`: String (required, verification token)
    - `expiresAt`: Timestamp (required)
    - `createdAt`: Timestamp
    - `updatedAt`: Timestamp

#### Guest Session Table

5. **`guest`** - Guest session management
    - `id`: UUID (primary key)
    - `sessionToken`: String (unique, required)
    - `createdAt`: Timestamp
    - `expiresAt`: Timestamp (required)

## Authentication Flow

### 1. Guest Sessions

-   All visitors automatically get a guest session via middleware
-   Guest sessions are stored in `guest_session` cookie
-   Guests can browse products and use cart features

### 2. User Authentication

-   Email-password authentication (MVP)
-   Sessions stored in `auth_session` cookie
-   7-day session expiry
-   Secure cookie configuration (HttpOnly, Secure, SameSite=strict)

### 3. Guest-to-User Migration

-   On successful login/signup, guest cart data is merged with user account
-   Guest session is deleted and cookie cleared
-   Seamless transition without data loss

## Security Features

### Cookie Security

-   `HttpOnly`: Prevents XSS attacks
-   `Secure`: HTTPS only in production
-   `SameSite=strict`: Prevents CSRF attacks
-   7-day expiry with automatic cleanup

### Password Security

-   bcrypt hashing with salt rounds of 12
-   Minimum 8-character password requirement
-   Secure password verification

### Input Validation

-   Zod schemas for all form inputs
-   Type-safe validation across the stack
-   SQL injection prevention via parameterized queries

## API Endpoints

### Server Actions

All authentication logic is implemented using Next.js Server Actions:

-   `signUp(formData)` - User registration
-   `signIn(formData)` - User login
-   `signOut()` - User logout
-   `guestSession()` - Get current guest session
-   `createGuestSession()` - Create new guest session
-   `mergeGuestCartWithUserCart(userId)` - Merge guest data with user
-   `getCurrentUser()` - Get current authenticated user
-   `requireAuth()` - Require authentication (redirects to login)

## Route Protection

### Protected Routes

-   `/checkout` - Requires authentication
-   `/account` - Requires authentication
-   `/orders` - Requires authentication

### Public Routes

-   All product pages
-   Cart functionality
-   Browse and search features

### Authentication Routes

-   `/login` - Redirects authenticated users to home
-   `/signup` - Redirects authenticated users to home

## Middleware

The application uses Next.js middleware to:

-   Automatically create guest sessions for new visitors
-   Protect routes that require authentication
-   Redirect authenticated users away from auth pages
-   Handle redirect URLs for post-login navigation

## Usage Examples

### Creating a Protected Page

```tsx
import { requireAuth } from "@/lib/auth/actions";

export default async function ProtectedPage() {
    const user = await requireAuth(); // Redirects to login if not authenticated

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            {/* Protected content */}
        </div>
    );
}
```

### Getting Current User (Optional)

```tsx
import { getCurrentUser } from "@/lib/auth/actions";

export default async function Page() {
    const user = await getCurrentUser(); // Returns null if not authenticated

    return (
        <div>
            {user ? <p>Welcome back, {user.name}!</p> : <p>Please sign in</p>}
        </div>
    );
}
```

### Client-Side Authentication Status

```tsx
"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth/actions";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        await signOut();
        router.push("/");
    };

    return <button onClick={handleLogout}>Sign Out</button>;
}
```

## Database Setup

### Migration Commands

```bash
# Generate migration files
npm run db:generate

# Apply migrations to database
npm run db:push

# Run migrations (alternative)
npm run db:migrate
```

### Environment Variables

Required environment variables:

-   `DATABASE_URL` - PostgreSQL connection string
-   `NODE_ENV` - Environment (development/production)

## Future Enhancements

### Planned Features

-   Email verification system
-   OAuth providers (Google, GitHub)
-   Two-factor authentication (2FA)
-   Password reset functionality
-   Role-based access control
-   Session management dashboard

### Extensibility

The schema is designed to be easily extensible:

-   OAuth support via the `account` table
-   Multiple authentication methods per user
-   Verification tokens for various purposes
-   Guest session management for cart persistence

## Testing

The authentication system can be tested by:

1. Visiting the application (should create guest session)
2. Navigating to `/checkout` (should redirect to login)
3. Creating an account at `/signup`
4. Signing in at `/login`
5. Accessing protected routes
6. Testing guest-to-user cart migration

## Security Considerations

-   All passwords are hashed using bcrypt
-   Sessions are stored securely in cookies
-   Input validation prevents injection attacks
-   CSRF protection via SameSite cookies
-   XSS protection via HttpOnly cookies
-   Automatic session cleanup on expiry
