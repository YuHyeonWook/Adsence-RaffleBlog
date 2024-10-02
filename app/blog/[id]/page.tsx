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

export default function BlogPost(params: { id: string }) {
  const { id } = params;
  console.log(id);

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Post content goes here</p>
      <span>{id}</span>
    </div>
  );
}
