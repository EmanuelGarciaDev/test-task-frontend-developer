
import { Post } from '@/types/post-types'
import React from 'react'

const PostPage: React.FC<{ post: Post }> = ({ post }) => {
  console.log(post);
  
    return (
      <div className='flex flex-col p-6 gap-6'>
          <h3 className='font-bold'>Author: {post.userId}</h3>
          <h3 className='font-bold'>Post ID: {post.id}</h3>
        <h2 className='text-4xl'>Title: {post.title}</h2>
        <p className='text-xl'>{post.body}</p>

      </div>
    );
  };
  
  export default PostPage;
