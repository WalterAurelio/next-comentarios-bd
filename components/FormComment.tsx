'use client';
import React from "react";
import { useRouter } from 'next/navigation';

function FormComment() {

  const router = useRouter();

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
    router.push('/');
  } 

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="comentario"
      >
        Comentario:
      </label>
      <input 
        className="text-black"
        type="text"
        id="comentario"
        placeholder="Ingrese un comentario"
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormComment;
