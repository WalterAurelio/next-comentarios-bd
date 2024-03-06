import React from "react";
import FormComment from "@/components/FormComment";

async function getComments() {
  const res = await fetch('http://localhost:3000/api/tasks');
  const data = await res.json();
  return data;
}

async function HomePage() {
  const comments = await getComments();

  return (
    <>
      <h2>Publicaciones:</h2>

      {
        comments.map((comment: any) => (
          <div key={comment.id}>
            <h2>{comment.user}</h2>
            <p>{comment.description}</p>
          </div>
        ))
      }

      <FormComment />
    </>
  );
}

export default HomePage;
