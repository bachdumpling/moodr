import {
  DeviceTabletIcon,
  FaceSmileIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import {
  DeviceTabletIcon as DeviceTabletIconSolid,
  FaceSmileIcon as FaceSmileIconSolid,
  HomeIcon as HomeIconSolid,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Footer() {
  const router = useRouter();
  const id = router.pathname;

  console.log(id);

  return (
    <footer className="z-10 flex justify-between px-14 py-4 pb-8 border-t-[1px] fixed bottom-0 left-0 right-0 bg-[#FFFFFF]">
      <Link href="/">
        <div className="flex flex-col items-center w-14">
          {id == "/" ? (
            <>
              <HomeIconSolid className="w-6" />
              <p className="text-xs font-bold">Home</p>
            </>
          ) : (
            <>
              <HomeIcon className="w-6" />
              <p className="text-xs">Home</p>
            </>
          )}
        </div>
      </Link>

      <Link href="/checkin">
        <div className="flex flex-col items-center w-14">
          {id == "/checkin" ? (
            <FaceSmileIconSolid className="w-6" />
          ) : (
            <FaceSmileIcon className="w-6" />
          )}
          <p className="text-xs">Check In</p>
        </div>
      </Link>

      <Link href="/device">
        <div className="flex flex-col items-center w-14">
          {id == "/device" ? (
            <>
              <DeviceTabletIconSolid className="w-6" />
              <p className="text-xs font-bold">Moodr</p>
            </>
          ) : (
            <>
              <DeviceTabletIcon className="w-6" />
              <p className="text-xs">Moodr</p>
            </>
          )}
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
