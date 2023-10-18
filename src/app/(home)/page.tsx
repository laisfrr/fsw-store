"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        className="h-auto w-full"
        sizes="100vw"
        src="/banner-home-01.png"
        height={0}
        width={0}
        alt="Até 55% de desconto esse mês"
      />
    </div>
  );
}
