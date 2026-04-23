import { NextResponse } from "next/server";

export function authMiddleware(request, token) {
  const { pathname } = request.nextUrl;
  const protectedRoutes = ["/profile", "/dashboard", "/users"];

  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return null; // কোনো সমস্যা না থাকলে null পাঠাবে
}
