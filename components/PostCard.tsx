import { Post } from "@/types/post-types";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }: { post: Post }) => {
    const HundredCharacter = `${post.body.substring(0,100)}...`
  return (
    <div className="border-4 px-4 border-double rounded-xl">
      <Link href={`/post/${post.id}`}>
        <p className="text-2xl">{post.title}</p>
      </Link>
      <p>{HundredCharacter}</p>
      <Link href={`/post/${post.id}`}>Read More</Link>
    </div>
  );
};

export default PostCard;
