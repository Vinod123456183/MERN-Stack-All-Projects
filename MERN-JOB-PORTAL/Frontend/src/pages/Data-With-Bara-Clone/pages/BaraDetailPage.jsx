import React from "react";
import { useParams } from "react-router-dom";

function BaraDetailPage() {
  const { id } = useParams();

  // If using static data:
  const posts = [
    {
      id: "1",
      heading: "Pandas vs. PySpark",
      content: "Full blog content...",
    },
    {
      id: "2",
      heading: "SQL for Beginners",
      content: "Another post...",
    },
    // more...
  ];

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{post.heading}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BaraDetailPage;
