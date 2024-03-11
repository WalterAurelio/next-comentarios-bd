import React from "react";
import Link from 'next/link';

function NotFound() {
  return (
    <section>
      <div className="flex flex-col h-[8rem] justify-between items-center mt-[10rem]">
        <h1 className="text-[3rem]">Page Not Found</h1>
        <Link href='/'
          className="bg-slate-700 w-[13rem] text-center p-3 hover:bg-slate-500 rounded-md"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
