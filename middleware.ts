import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  console.log("🔍 Middleware executed at:", req.nextUrl.pathname);

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isUserRoute = req.nextUrl.pathname.startsWith("/user");

  if (!token && (isAdminRoute || isUserRoute)) {
    console.log("🚫 No token found. Redirecting to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isAdminRoute && token?.role !== "admin") {
    console.log("⛔ Not an admin. Redirecting to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isUserRoute && token?.role !== "user") {
    console.log("⛔ Not a user. Redirecting to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  console.log("✅ Middleware HIT:", req.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};