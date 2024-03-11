'use client';
import React from "react";
import { useRouter } from 'next/navigation';

function Comment({ comment }: any) {
  const router = useRouter();

  async function deleteComment(id: number) {
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'DELETE'
    })
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="bg-blue-800 w-full p-4 rounded-md">
      <h2 className="mb-2 text-lg font-bold">{comment.user}:</h2>
      <p>{comment.description}</p>
      <div className="flex justify-between mt-2">
        <button
          className="bg-slate-700 p-2 rounded-md"
          onClick={() => {
            router.push(`/tasks/${comment.id}`);
          }}
        >
          Ver comentario
        </button>
        <button
          className="bg-slate-700 p-2 rounded-md"
          onClick={() => {
            deleteComment(comment.id);
            router.refresh();
            router.push('./');
          }}
        >
          Eliminar comentario
        </button>
      </div>
    </div>
  );
}

export default Comment;
