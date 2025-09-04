import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Routes that require authentication
// checkout will be protected later
const protectedRoutes = ["/account", "/orders"];

// Routes that should redirect to dashboard if already authenticated
const authRoutes = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check for auth session cookie
    const authSession = request.cookies.get("auth_session");
    const guestSession = request.cookies.get("guest_session");

    // Create guest session if no session exists and not on auth routes
    if (!authSession && !guestSession && !authRoutes.includes(pathname)) {
        const response = NextResponse.next();

        // Generate guest session token
        const guestToken = crypto.randomUUID();
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

        // Set guest session cookie
        response.cookies.set("guest_session", guestToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 7 * 24 * 60 * 60, // 7 days
        });

        return response;
    }

    // Redirect authenticated users away from auth routes
    if (authSession && authRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // Redirect unauthenticated users to login for protected routes
    if (
        !authSession &&
        protectedRoutes.some((route) => pathname.startsWith(route))
    ) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
