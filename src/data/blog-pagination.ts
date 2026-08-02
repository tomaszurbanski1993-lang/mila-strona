import type { CollectionEntry } from "astro:content";

export const BLOG_POSTS_PER_PAGE = 8;

export type BlogPost = CollectionEntry<"blog">;

export interface BlogPage {
  currentPage: number;
  totalPages: number;
  posts: BlogPost[];
}

export const getBlogPageUrl = (page: number): string =>
  page === 1 ? "/blog/" : `/blog/page/${page}/`;

export const sortBlogPosts = (posts: BlogPost[]): BlogPost[] =>
  [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const paginateBlogPosts = (posts: BlogPost[]): BlogPage[] => {
  const sortedPosts = sortBlogPosts(posts);
  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / BLOG_POSTS_PER_PAGE));

  return Array.from({ length: totalPages }, (_, index) => {
    const currentPage = index + 1;
    const start = index * BLOG_POSTS_PER_PAGE;

    return {
      currentPage,
      totalPages,
      posts: sortedPosts.slice(start, start + BLOG_POSTS_PER_PAGE),
    };
  });
};
