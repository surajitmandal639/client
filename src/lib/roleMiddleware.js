import { NextResponse } from "next/server";

export function roleMiddleware(request, role) {
  const { pathname } = request.nextUrl;

  // উদাহরণ: /users রুটে যেতে হলে 'admin' রোল লাগবে
  if (pathname.startsWith("/users") && role !== "admin") {
    // return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return null;
}
