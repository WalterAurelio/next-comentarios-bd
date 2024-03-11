import React from "react";
import Link from 'next/link';

async function getComment(id: any) {
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`);
  const data = res.json();
  return data;
}

async function commentPage({ params }: any) {
  const comment = await getComment(params.id);

  return (
    <div className="flex flex-col items-center h-40 justify-between w-[40rem] mx-auto">
      <h2 className="text-[2rem]">Usuario: {comment.user}</h2>
      <p className="text-xl">Comentario: {comment.description}</p>
      <Link className="text-xl bg-slate-700 p-2 rounded-md w-[16rem] text-center hover:bg-slate-500" href="/">
        Ir a Inicio
      </Link>
    </div>
  );
}

export default commentPage;