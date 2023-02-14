import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [
    '/ip',
    '/s3',
    '/r2',
    '/spotify'
  ]
};

export default async function middleware(request: NextRequest) {
  switch (request.nextUrl.pathname) {
    case '/ip':
      return NextResponse.rewrite(new URL('/api/ip', request.nextUrl.origin))
    case '/s3':
      return NextResponse.rewrite(new URL('/api/s3', request.nextUrl.origin))
    case '/r2':
      return NextResponse.rewrite(new URL('/api/s3', request.nextUrl.origin))
    case '/spotify':
      return NextResponse.rewrite(new URL('/api/spotify', request.nextUrl.origin))
    default:
      return NextResponse.next()
  }
}
