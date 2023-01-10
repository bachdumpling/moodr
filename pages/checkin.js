import React, { useState } from "react";
import {
  Bars3Icon,
  UserCircleIcon,
  HomeIcon,
  FaceSmileIcon,
  DeviceTabletIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import CheckinPage1 from "../components/CheckinPage1";
import CheckinPage0 from "../components/CheckinPage0";
import CheckinPage2 from "../components/CheckinPage2";

function checkin() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
      <Link href="/">
        <div className="z-10 flex justify-between px-4 py-4 pt-12 border-b-[1px] fixed top-0 left-0 right-0 bg-[#FFFFFF]">
          <ChevronLeftIcon className="w-6 " />
        </div>
      </Link>

      <div className="overflow-y-hidden overflow-x-hidden relative top-10">
        <div className="">
          <form
          //   onSubmit={handleSubmit}
          >
            {currentPage === 0 && (
              <CheckinPage0
                nextPage={nextPage}
                // handleChange={handleChange}
                // name={name}
              />
            )}
            {currentPage === 1 && (
              <CheckinPage1
                nextPage={nextPage}
                // handleChange={handleChange}
                // name={name}
              />
            )}
            {currentPage === 2 && (
              <CheckinPage2
                nextPage={nextPage}
                previousPage={previousPage}
                // handleChange={handleChange}
                // email={email}
              />
            )}
          </form>
        </div>
      </div>

      <footer className="z-10 flex justify-between px-4 py-4 pb-14 fixed bottom-0 left-0 right-0 bg-[#FFFFFF]">
        <button
          onClick={nextPage}
          className="rounded-full w-full h-14 bg-green-400 text-white font-bold text-lg shadow-sm"
        >
          Continue
        </button>
      </footer>
    </div>
  );
}

export default checkin;
