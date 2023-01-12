import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircleIcon,
  ChevronLeftIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import CheckinHeader from "./CheckinHeader";

function CheckinPage1({ nextPage, previousPage, answer1, setAnswer1 }) {
  return (
    <>
      <CheckinHeader previousPage={previousPage} />
      <div className="w-screen flex flex-col justify-center items-center mt-6">
        <div className="text-center pt-12">
          <p className="text-2xl px-6 text-green-400 font-bold">
            Is there any event affecting your mood today?
          </p>
          <p className="text-sm text-gray-400 pt-2">
            Choose an option that best describes your situation
          </p>
        </div>

        <div className="flex text-center w-full justify-center items-center gap-5 mt-8 mb-8">
          <button
            onClick={(e) => {
              e.preventDefault();
              setAnswer1("yes");
            }}
            className={`${
              answer1 == "yes" ? "border-green-400 border-[1.5px]" : null
            } w-24 h-16 px-2 py-2 bg-[#FFFFFF] rounded-[10px] text-black shadow-lg`}
          >
            <div className="flex flex-row justify-center items-center gap-1">
              <CheckCircleIcon className="w-6 text-green-500" /> Yes
            </div>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setAnswer1("no");
            }}
            className={`${
              answer1 == "no" ? "border-green-400 border-[1.5px]" : null
            } w-24 h-16 px-2 py-2 bg-[#FFFFFF] rounded-[10px] text-black shadow-lg`}
          >
            <div className="flex flex-row justify-center items-center gap-1">
              <XCircleIcon className="w-6 text-green-500" /> No
            </div>
          </button>
        </div>
      </div>
      <footer className="z-10 flex justify-between px-4 py-4 pb-14 fixed bottom-0 left-0 right-0 bg-[#FFFFFF]">
        {answer1 ?
        <button onClick={nextPage} className="checkin-btn bg-[#EE7B69]">
          Next
        </button>
          :
        <button disabled="true" onClick={nextPage} className="checkin-btn bg-[#EE7B69] opacity-40">
          Next
        </button>}
      </footer>
    </>
  );
}

export default CheckinPage1;
