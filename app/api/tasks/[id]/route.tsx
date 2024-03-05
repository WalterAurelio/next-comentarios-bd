import { NextResponse } from "next/server";

interface PageProps {
  params: { id: number },
  searchParams?: { [key: string]: string | string[] | undefined }
}

export function GET({ params }: PageProps) {
  
}

export function POST() {

}

export function DELETE() {

}