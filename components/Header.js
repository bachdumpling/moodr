import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon as UserCircleIconSolid } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Header() {
  const router = useRouter();
  const id = router.pathname;

  return (
    <div className="z-10 flex justify-between px-4 py-4 pt-12 border-b-[1px] fixed top-0 left-0 right-0 bg-[#FFFFFF]">
      <Link href="/welcome">
        <Bars3Icon className="w-6 " />
      </Link>
      <Link href="/profile">
        {id == "/profile" ? (
          <UserCircleIconSolid className="w-6 " />
        ) : (
          <UserCircleIcon className="w-6 " />
        )}
      </Link>
    </div>
  );
}

export default Header;
