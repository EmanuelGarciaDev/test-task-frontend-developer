// Import the Post type from your types file
import { Post } from '../../../types/post-types'

// Function to fetch a single post by ID
async function fetchPostById(id: number): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  if (!response.ok) {
    throw new Error(`Could not fetch post with id: ${id}`);
  }
  
  return response.json();
}

// Default export for the page component
export default async function Page({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id); // Convert ID string to a number

  // Fetch the post data
  const post = await fetchPostById(postId);

  // Render the post details
  return (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <h3>User ID: {post.userId}</h3>
      <p>{post.body}</p>
    </div>
  );
}