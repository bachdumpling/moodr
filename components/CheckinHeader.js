import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

function CheckinHeader({previousPage}) {
  return (
    <button
      onClick={previousPage}
      className="z-10 flex justify-between px-4 py-4 pt-8 fixed top-0 left-0 right-0 bg-[#FFFFFF]"
    >
      <ChevronLeftIcon className="w-6 " />
    </button>
  );
}

export default CheckinHeader;
