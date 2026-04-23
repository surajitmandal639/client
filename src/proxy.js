import { NextResponse } from "next/server";

export function proxy(req) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  // ✅ allow these routes without login
  if (
    pathname === "/" ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/logout")
  ) {
    return NextResponse.next();
  }

  // ❌ protect dashboard
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login", "/logout"],
};