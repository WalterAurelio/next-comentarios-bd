'use client';
import React, { useRef } from "react";
import { useRouter } from 'next/navigation';

function FormComment() {
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = 'AurelioGG_94'
    const description = e.target.comentario.value;
    const res = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({ user, description }),
      headers: {
        'Content-Type': 'application/json' 
      }
    });
    const data = await res.json();
    console.log(data);
    ref.current?.reset();
    router.push('/');
    router.refresh();
  } 

  return (
      <form
        ref={ref}
        className="flex flex-col py-4 w-custom mx-auto"
        onSubmit={handleSubmit}
      >
        <label
          className="text-xl mb-2"
          htmlFor="comentario"
        >
          Comentario:
        </label>
        <textarea 
          className="text-black h-40 mb-4 p-2 outline-none resize-none rounded-md"
          id="comentario"
          placeholder="Ingrese un comentario"
        />

        <button 
          type="submit"
          className="bg-blue-900 py-2 hover:bg-blue-500 rounded-md"
        >
          Enviar
        </button>
      </form>

  );
}

export default FormComment;
