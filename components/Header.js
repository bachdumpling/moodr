import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="z-10 flex justify-between px-4 py-4 pt-12 border-b-[1px] fixed top-0 left-0 right-0 bg-[#FFFFFF]">
      <Bars3Icon className="w-6 " />
      <Link href="/profile">
        <UserCircleIcon className="w-6 " />
      </Link>
    </div>
  );
}

export default Header;
