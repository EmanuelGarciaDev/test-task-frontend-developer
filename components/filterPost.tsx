import { Post } from "@/types/post-types";

export const filterPosts = (posts: Post[], query: string): Post[] => {
  if (!query) return posts;

  const lowerQuery = query.toLowerCase();

  return posts.filter((post) => {
    // Check if post.name exists and is a string before calling toLowerCase()
    const postName = typeof post.title === 'string' ? post.title.toLowerCase() : '';

    // Check if postName includes the query
    return postName.includes(lowerQuery);
  });
};