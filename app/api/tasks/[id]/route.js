import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';

export async function GET(request, { params }) {
  const comment = await prisma.task.findUnique({
    where: {
      id: Number(params.id)
    }
  });
  return NextResponse.json(comment);
}

export async function DELETE(request, { params }) {
  try {
    const commentDeleted = await prisma.task.delete({
      where: {
        id: Number(params.id)
      }
    });
    return NextResponse.json(commentDeleted);
  }
  catch (error) {
    return NextResponse.json(error.message);
  }
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const comment = await prisma.task.update({
    where: {
      id: Number(params.id)
    },
    data: {
      user: data.user,
      description: data.description
    }
  });
  return NextResponse.json(comment);
}

