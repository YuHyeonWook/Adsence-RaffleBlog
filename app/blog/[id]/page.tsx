"use client";

import posts from "@/data/posts";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();
  const { id } = params;

  const post = posts.find((p) => p.id === id);

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
