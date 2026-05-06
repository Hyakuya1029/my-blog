import { Post } from './types';
import postsData from '../../data/posts.json';

export function getAllPosts(): Post[] {
  return postsData
    .filter(post => post.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostById(id: string): Post | undefined {
  return postsData.find(post => post.id === id);
}

export function getAllPostIds(): string[] {
  return postsData.map(post => post.id);
}