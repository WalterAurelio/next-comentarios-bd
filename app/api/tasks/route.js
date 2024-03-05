import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const comments = await prisma.task.findMany();
  return NextResponse.json(comments);
}

export async function POST(request) {
  const comment = await request.json();
  await prisma.task.create({
    comment: {
      title: comment.title,
      description: data.description
    }
  });
  return NextResponse.json('creando comentario');
}
