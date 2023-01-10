import React from "react";
import {
    ChevronRightIcon,
    DeviceTabletIcon,
  } from "@heroicons/react/24/outline";

function CustomizeYourMoodr() {
  return (
    <div className="mt-[12px] border-t-[0.1px] shadow-md flex justify-between py-4 px-4 items-center rounded-[10px]">
      <div className="flex flex-row items-left items-center">
        <div className="border py-4 px-4 mr-4 bg-gray-100 rounded-[5px]">
          <DeviceTabletIcon className="w-5" />
        </div>
        <span className="flex flex-col items-left">
          <span className="font-semibold text-lg">Chanbin's Moodr</span>
          <p className="text-xs text-gray-500">Customize to fit your needs</p>
        </span>
      </div>
      <ChevronRightIcon className="text-gray-500 w-5" />
    </div>
  );
}

export default CustomizeYourMoodr;
