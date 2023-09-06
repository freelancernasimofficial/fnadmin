import React from "react";
import Header from "@/src/components/layout/Header";
import SidebarLeft from "@/src/components/layout/SidebarLeft";
import SidebarRight from "@/src/components/layout/SidebarRight";
type Props = {};

export default function page({}: Props) {
  return (
    <div className='antialiased '>
      {/* Sidebar */}
      <Header />
      <SidebarLeft />
      <SidebarRight />
      <main className='p-4  bg-gray-500 md:mx-64 min-h-screen pt-20'></main>
    </div>
  );
}
