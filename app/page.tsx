import AllPosts from "@/components/AllPosts";
import { Post } from "@/types/post-types";

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await data.json()) as Post[];
  return (
    <div className="prose dark:prose-invert">
      <AllPosts posts={posts} />
    </div>
  );
}
