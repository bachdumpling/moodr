import Image from "next/image";
import MoodFinderLandingPage from "../asset/MoodFinderLandingPage.svg";
import React from "react";
import Link from "next/link";

function welcome() {
  return (
    <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
      <div className="w-screen h-full flex flex-col justify-center items-center pt-40">
        <Image className="" src={MoodFinderLandingPage} />
        <div className="text-center px-18 pt-12">
          <p className="text-4xl text-[#B0CB93] font-bold">Welcome to Moodr!</p>
        </div>
      </div>

      <div className="px-8 pt-10">
        <Link href="/login">
          <div className="flex justify-between py-2 bg-[#FFFFFF]">
            <button className="rounded-full w-full h-14 bg-[#B0CB93] text-white font-bold text-lg shadow-md">
              Log In
            </button>
          </div>
        </Link>
        <Link href="/signup">
          <div className="py-2 bg-[#FFFFFF]">
            <button className="rounded-full w-full h-14 bg-white border border-green-300 text-green-400 font-bold text-lg shadow-md">
              Create Account
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default welcome;
