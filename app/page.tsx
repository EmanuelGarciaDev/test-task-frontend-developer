import AllPosts from "@/components/AllPosts";
import { Post } from '@/types/post-types';
import axios from 'axios';

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="prose dark:prose-invert">
      <AllPosts posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return {
      props: {
        posts: data, // Make sure data is not undefined or null
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [], // Fall back to an empty array to prevent undefined errors
      },
    };
  }
};