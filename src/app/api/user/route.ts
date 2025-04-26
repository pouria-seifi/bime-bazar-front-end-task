import { NextRequest, NextResponse } from "next/server";

import { BASE_URL } from "@/src/utils/constants";

export async function GET() {
  try {
    const res = await fetch(`${BASE_URL}/my-addresses`, {
      credentials: "include",
    });

    const data = await res.json();
    const cookies = res.headers.get("set-cookie");

    const response = NextResponse.json({
      data,
    });

    response.headers.set("Set-Cookie", cookies ?? "");

    return response;
  } catch {
    return NextResponse.json(
      { error: "پردازش اطلاعات با مشکل مواجه شد" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${BASE_URL}/order/completion/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "پردازش اطلاعات با مشکل مواجه شد" },
      { status: 500 }
    );
  }
}
