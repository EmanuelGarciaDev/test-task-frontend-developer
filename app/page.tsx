import AllPosts from "@/components/AllPosts";
import { Post } from '@/types/post-types';
import axios from 'axios';

export default async function Home({ posts: initialPosts }: { posts: Post[] }) {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()
  return (
    <div className="prose dark:prose-invert">
      <AllPosts posts={posts} />
    </div>
  );
}
