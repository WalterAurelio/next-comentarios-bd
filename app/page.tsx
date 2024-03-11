import React from "react";
import FormComment from "@/components/FormComment";
import Comment from '@/components/Comment';
import { prisma } from '@/libs/prisma';

/* async function getComments() {
  const res = await fetch('http://localhost:3000/api/tasks');
  const data = await res.json();
  console.log(data);
  return data;
} */

async function getComments() {
  const comments = await prisma.task.findMany();
  console.log(comments);
  return comments;
}

async function HomePage() {
  const comments = await getComments();

  return (
    <>
      <h2 className="mb-2 text-[3rem] text-center">Publicaciones:</h2>

      <div className="grid grid-cols-auto gap-4 w-custom mx-auto">
        {
          comments.map((comment: any) => (
            <Comment key={comment.id} comment={comment} />
          ))
        }
      </div>

      <FormComment />
    </>
  );
}

export default HomePage;
