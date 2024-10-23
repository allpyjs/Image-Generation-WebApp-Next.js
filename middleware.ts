import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Do nothing if dev preview
  if (req.headers.get("host") === process.env.DEV_PREVIEW_URL)
    return NextResponse.next();

  // Check if the host header matches the old URL

  // Continue processing the request as normal
  return NextResponse.next();
}
