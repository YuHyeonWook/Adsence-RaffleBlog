"use client";

import posts from "@/data/posts";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();
  const { id } = params;

  const post = posts.find((p) => p.id === id);
  const paragraphs = post?.content.split("\n");

  if (!post) {
    return <div className="text-center text-red-500">Post not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <article className="prose lg:prose-xl max-w-4xl p-8 rounded-lg shadow-md">
        <header className="border-b pb-4 mb-8">
          <h1 className="text-4xl font-bold">{post.title}</h1>
        </header>

        <section className="space-y-6">
          {paragraphs?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      </article>
    </div>
  );
}
