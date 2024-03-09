import React from "react";

async function getComment(id: any) {
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`);
  const data = res.json();
  return data
}

async function commentPage({ params }: any) {

  const comment = await getComment(params.id);

  return (
    <div>
      <h2>{comment.user}</h2>
      <p>{comment.description}</p>
    </div>
  );
}

export default commentPage;
