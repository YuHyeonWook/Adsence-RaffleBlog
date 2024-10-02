"use client";

import { useParams } from "next/navigation";

const posts = [
  {
    id: "1",
    title: "First Post",
    content:
      "This is the content of the first post. It's about 400-500 words long and covers a specific topic in detail.",
  },
  {
    id: "2",
    title: "Second Post",
    content:
      "This is the content of the second post. It also meets the word count and includes insightful information for readers.",
  },
];

export default function BlogPost() {
  const params = useParams();
  const { id } = params;

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
