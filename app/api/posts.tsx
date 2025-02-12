// pages/api/posts.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Post } from '@/types/post-types'; // Make sure this path is correct based on your directory structure

export default async function handler(req: NextApiRequest, res: NextApiResponse<Post[]>) {
  try {
    const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json([]);
  }
}