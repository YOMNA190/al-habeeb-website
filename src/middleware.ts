import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with a locale
  const pathnameHasLocale = /^\/(?:ar|en)/.test(pathname);

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to /ar by default
  return NextResponse.redirect(new URL(`/ar${pathname}`, request.url));
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|public|favicon.ico).*)',
  ],
};
