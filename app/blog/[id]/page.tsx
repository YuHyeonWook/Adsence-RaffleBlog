"use client";

import posts from "@/data/posts";
import { useParams } from "next/navigation";
import { useState, FormEvent, ChangeEvent } from "react";

// Post 타입 정의
interface Post {
  id: string;
  title: string;
  content: string;
}

export default function BlogPost() {
  const params = useParams();
  const { id } = params as { id: string }; // URL 파라미터로 전달되는 id를 문자열로 정의

  // posts 배열에서 Post를 찾기
  const post: Post | undefined = posts.find((p: Post) => p.id === id);

  // 상태 타입 정의
  const [likes, setLikes] = useState<number>(0); // 좋아요 상태: 숫자
  const [bookmarked, setBookmarked] = useState<boolean>(false); // 북마크 상태: 불리언
  const [comments, setComments] = useState<string[]>([]); // 덧글 상태: 문자열 배열
  const [comment, setComment] = useState<string>(""); // 현재 입력된 덧글 상태: 문자열

  // 덧글 제출 핸들러 함수
  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment(""); // 덧글 입력 후 입력 필드 초기화
    }
  };

  // 덧글 입력 핸들러 함수
  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  // 포스트가 없을 경우
  if (!post) {
    return <div className="text-center text-red-500">Post not found</div>;
  }

  // 포스트 내용을 문단 단위로 나누기
  const paragraphs: string[] = post.content.split("\n");

  return (
    <div className="flex flex-col items-center justify-center min-h-scree">
      <article className="prose lg:prose-xl max-w-4xl p-8 rounded-lg shadow-md">
        <header className="border-b pb-4 mb-8">
          <h1 className="text-4xl font-bold">{post.title}</h1>
        </header>

        <section className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        {/* 좋아요 및 북마크 기능 */}
        <div className="flex gap-4 mt-8">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => setLikes(likes + 1)}
          >
            👍 좋아요 {likes}
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              bookmarked ? "bg-yellow-400 text-white" : "bg-gray-200 text-blue-700"
            }`}
            onClick={() => setBookmarked(!bookmarked)}
          >
            {bookmarked ? "🔖 북마크됨" : "🔖 북마크"}
          </button>
        </div>

        {/* 덧글 섹션 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">덧글</h2>

          {/* 덧글 목록 */}
          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-gray-500">아직 덧글이 없습니다. 첫 번째 덧글을 작성해보세요!</p>
            ) : (
              comments.map((cmt, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gray-100">
                  {cmt}
                </div>
              ))
            )}
          </div>

          {/* 덧글 입력 폼 */}
          <form onSubmit={handleCommentSubmit} className="mt-8">
            <textarea
              value={comment}
              onChange={handleCommentChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="덧글을 입력하세요..."
              rows={4}
            ></textarea>
            <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              덧글 작성
            </button>
          </form>
        </section>
      </article>
    </div>
  );
}
