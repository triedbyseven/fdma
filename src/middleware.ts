import { NextRequest, NextResponse } from "next/server";
import authorizeRequest from "./utils/authorizeRequest";
import { cookies } from "next/headers";

const proctectedRoutes = ["/", "/dashboard"];

export default async (request: NextRequest) => {
  const key: string = cookies().get("auth-public-token")?.value || "";
  const hasSession: boolean = await authorizeRequest(key);

  if (!hasSession && proctectedRoutes.includes(request.nextUrl.pathname)) {
    const absoluteURL: URL = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  };
};

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/", "/dashboard"],
// }