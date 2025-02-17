'use client';

import React, { useEffect, useState } from "react";
import { Post } from "@/types/post-types";
import PostCard from "./PostCard";
import SearchBar from "./SearchBar";
import { filterPosts } from "./filterPost";

const AllPosts = ({ posts }: { posts: Post[] }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  // Effect to update filtered posts when searchQuery or posts change
  useEffect(() => {
    setFilteredPosts(filterPosts(posts, searchQuery));
  }, [searchQuery, posts]);

  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
      {filteredPosts.length === 0 
        ? (
          <p>No posts match your search criteria.</p>
        ) : (
          filteredPosts.map((post) => (
            <article key={post.id}>
              <PostCard post={post} />
            </article>
          ))
        )}
    </div>
    </div>
  );
};

export default AllPosts;
