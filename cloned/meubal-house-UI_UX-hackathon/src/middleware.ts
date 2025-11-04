import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware function can be used to intercept requests
export function middleware(request: NextRequest) {
  // You can add custom logic here if needed
  // For now, we're just allowing all requests to proceed
  return NextResponse.next();
}

export const config = {
  // Matcher to specify which routes the middleware should run for
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};