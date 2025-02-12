import React from "react";
import Link from "next/link";
import { Post } from "@/types/post-types";
import PostCard from "./PostCard";

const AllPosts = ({ posts }: { posts: Post[] }) => {
  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-2">
      {posts.map((post) => (
        <article key={post.id}>
            <PostCard post={post} />
        </article>
      ))}
    </div>
  );
};

export default AllPosts;
