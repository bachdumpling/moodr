import React from "react";
import MoodFinderLandingPage from "../asset/MoodFinderLandingPage.svg";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function CheckinPage0({ nextPage }) {
  return (
    <>
      <Link href="/">
        <div className="z-10 flex justify-between px-4 py-4 pt-8 fixed top-0 left-0 right-0 bg-[#FFFFFF]">
          <ChevronLeftIcon className="w-6 " />
        </div>
      </Link>
      <div className="w-screen flex flex-col justify-center items-center mt-36">
        <Image className="" src={MoodFinderLandingPage} alt="landing page" />
        <div className="text-center px-20 pt-12">
          <p className="text-2xl text-[#B0CB93] font-bold">Find Your Mood</p>
          <p className="text-sm text-gray-400 pt-2">
            Let’s complete a short questionnaire to better understand how you
            are feeling at this moment!
          </p>
        </div>
      </div>
      <footer className="z-10 flex justify-between px-4 py-4 pb-14 fixed bottom-0 left-0 right-0 bg-[#FFFFFF]">
        <button onClick={nextPage} className="checkin-btn bg-[#B0CB93]">
          Continue
        </button>
      </footer>
    </>
  );
}

export default CheckinPage0;
