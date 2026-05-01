import { NextResponse } from "next/server";

export function proxy(req) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;

  const isAuthPage = path.startsWith("/login");

  const isDashboard = path.startsWith("/dashboard");

  // ❌ protect dashboard
  if (isDashboard && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ❌ prevent logged-in user from seeing login page
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // const token = req.cookies.get("token")?.value;
  // const pathname = req.nextUrl.pathname;

  // // ✅ allow these routes without login
  // if (
  //   pathname === "/" ||
  //   pathname.startsWith("/login") ||
  //   pathname.startsWith("/logout")
  // ) {
  //   return NextResponse.next();
  // }

  // // ❌ protect dashboard
  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login", "/logout"],
};

