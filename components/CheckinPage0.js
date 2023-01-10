import React from "react";
import MoodFinderLandingPage from "../asset/MoodFinderLandingPage.svg";
import Image from "next/image";

function CheckinPage0() {
  return (
    <div className="w-screen h-[800px] flex flex-col justify-center items-center">
      <Image className="" src={MoodFinderLandingPage} />
      <div className="text-center px-20 pt-12">
        <p className="text-2xl text-green-300 font-bold">Find Your Mood</p>
        <p className="text-sm text-gray-400 pt-2">
          Let’s complete a short questionnaire to better understand how you are
          feeling at this moment!
        </p>
      </div>
    </div>
  );
}

export default CheckinPage0;
