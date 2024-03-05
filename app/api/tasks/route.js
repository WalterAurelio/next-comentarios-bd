import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const comments = await prisma.task.findMany();
  return NextResponse.json(comments);
}

export async function POST(request) {
  const data = await request.json();
  const newComment = await prisma.task.create({
    data: {
      user: data.description,
      description: data.user
    }
  });
  return NextResponse.json(newComment);
}
