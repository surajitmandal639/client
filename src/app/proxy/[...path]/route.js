// src/app/proxy/[...path]/route.js

import { NextResponse } from "next/server";

const BASE_URL = "http://127.0.0.1:8000/api/v1";

async function handler(req, context, method) {
  const { path } = await context.params;

  const cleanPath = (path ?? []).join("/");
  const url = cleanPath ? `${BASE_URL}/${cleanPath}` : BASE_URL;

  const token = req.cookies.get("token")?.value;

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const body = method === "GET" ? undefined : await req.text();

  const res = await fetch(url, {
    method,
    headers,
    body,
  });

  const data = await res.json().catch(() => ({}));

  const response = NextResponse.json(data, { status: res.status });

  // 🔥 VERY IMPORTANT: forward cookie
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) {
    response.headers.set("set-cookie", setCookie);
  }

  return response;
}

export const GET = (req, ctx) => handler(req, ctx, "GET");
export const POST = (req, ctx) => handler(req, ctx, "POST");
export const PUT = (req, ctx) => handler(req, ctx, "PUT");
export const DELETE = (req, ctx) => handler(req, ctx, "DELETE");