// Import the Post type from your types file
import PostPage from '@/components/PostPage';
import { Post } from '../../../types/post-types'

export default async function Page({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);
  async function fetchPostById(id: number): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    if (!response.ok) {
      throw new Error(`Could not fetch post with id: ${id}`);
    }
    
    return response.json();
  }
  const post = await fetchPostById(postId);
  return <PostPage post={post} />;
}