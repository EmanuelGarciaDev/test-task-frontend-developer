import { Post } from "@/types/post-types";

export const getStaticProps = async () => {
  try {
    const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    console.log('Fetched posts:', data);
    return {
      
      props: {
        posts: data,
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};