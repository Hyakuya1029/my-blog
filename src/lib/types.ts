export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  published: boolean;
}