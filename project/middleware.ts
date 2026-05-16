// middleware.ts

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;

    const authPages = ["/authenticate"];

    const protectedPages = [
      "/aiRecommendation",
      "/userBoarding",
      "/weeklyPlans",
    ];

    const pathname = req.nextUrl.pathname;

    // USER LOGGED IN -> auth pages mat dikhao
    if (token && authPages.some((page) => pathname.startsWith(page))) {
      return NextResponse.redirect(new URL("/userBoarding", req.url));
    }

    // USER LOGIN NAHI -> protected page mat dikhao
    if (!token && protectedPages.some((page) => pathname.startsWith(page))) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  },
);

export const config = {
  matcher: [
    "/authenticate",
    "/aiRecommendation/:path*",
    "/userBoarding/:path*",
    "/weeklyPlans/:path*",
  ],
};
