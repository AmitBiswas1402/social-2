"use client";

import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-purple-500 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-pink-500 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-orange-500 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] font-semibold text-slate-50 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">HOME</Link>
          <Link href="/">FRIENDS</Link>
          <Link href="/">GROUPS</Link>
          <Link href="/">STORIES</Link>
          <Link href="/">LOGIN</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;