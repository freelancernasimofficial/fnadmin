import React from "react";
import Header from "@/src/components/layout/Header";
import SidebarLeft from "@/src/components/layout/SidebarLeft";
import SidebarRight from "@/src/components/layout/SidebarRight";
import VectorButton from "@/src/components/VectorButton";
type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <Header />
      <SidebarLeft />
      <SidebarRight />
      <main className='p-4   mx-64 md:mx-0 min-h-screen pt-20'>
        <VectorButton />
      </main>
    </div>
  );
}
