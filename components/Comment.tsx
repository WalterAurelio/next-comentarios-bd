'use client';
import React from "react";
import { useRouter } from 'next/navigation';

function Comment({ comment }: any) {
  const router = useRouter();

  return (
    <div
      className="bg-blue-800 w-1/5 p-4"
      onClick={() => {
        router.push(`/tasks/${comment.id}`);
      }}
    >
      <h2 className="mb-2 text-lg font-bold">{comment.user}:</h2>
      <p>{comment.description}</p>
    </div>
  );
}

export default Comment;
