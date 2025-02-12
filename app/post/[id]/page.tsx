import { Post } from "@/types/post-types";
import axios from "axios";

const PostPage = ({ post }: { post: Post }) => {
  return (
    <div className="prose dark:prose-invert">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data: posts } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const { data: post } = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  return {
    props: {
      post,
    },
  };
};

export default PostPage;