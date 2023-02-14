import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/test' };

export async function middleware() {
  const greeting = await get('test passed');
  return NextResponse.json(greeting);
}
