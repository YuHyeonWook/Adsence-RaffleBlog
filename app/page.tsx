import Link from "next/link";
import posts from "../data/posts";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">전체 글</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="border-b border-gray-200 pb-6">
            <Link href={`/blog/${post.id}`} className="block group">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">목차1</span>
                <span className="mr-4">문제에 대한 정보 수집3</span>
                <span>원인 추론4</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          이전
        </button>
        <div className="space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 focus:bg-blue-500 focus:text-white"
            >
              {page}
            </button>
          ))}
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          다음
        </button>
      </div>
    </div>
  );
}
