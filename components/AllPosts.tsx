import React from 'react';
import Link from "next/link";
import { Post } from '@/types/post-types';

const AllPosts = ({ posts }: { posts: Post[] }) => {
  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>; // Handle case when there are no posts
  }

  return (
    <>
      {posts.map((post) => (
        <article key={post.id}>
          <Link href={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        </article>
      ))}
    </>
  );
};

export default AllPosts;