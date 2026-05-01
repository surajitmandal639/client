// src/app/proxy/[...path]/route.js

import { NextResponse } from "next/server";

const BASE_URL = "http://127.0.0.1:8000/api/v1";

async function handler(req, { params }, method) {
  const cleanPath = (params.path ?? []).join("/");

  const url = `${BASE_URL}/${cleanPath}`;

  const token = req.cookies.get("token")?.value;

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  let body;

  if (method !== "GET") {
    try {
      const json = await req.json();
      body = JSON.stringify(json);
    } catch {
      body = await req.text();
    }
  }

  const res = await fetch(url, {
    method,
    headers,
    body,
  });

  const data = await res.json().catch(() => ({}));

  return NextResponse.json(data, { status: res.status });
}

export const GET = (req, ctx) => handler(req, ctx, "GET");
export const POST = (req, ctx) => handler(req, ctx, "POST");
export const PUT = (req, ctx) => handler(req, ctx, "PUT");
export const DELETE = (req, ctx) => handler(req, ctx, "DELETE");