import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/posts';

export async function GET() {
  const posts = getAllPosts().map(({ content, ...rest }) => rest);
  return NextResponse.json(posts);
}
