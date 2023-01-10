import React from "react";

function PreviousMoodCard() {
  return (
    <div className="mt-[8px] border-t-[0.1px] shadow-md flex justify-between py-4 px-4 items-center rounded-[10px]">
      <span className="text-sm font-semibold flex items-center">
        {" "}
        <span className="text-3xl pr-4">😄</span>Happy
      </span>
      <p className="text-sm text-gray-500">8 Hours Ago</p>
    </div>
  );
}

export default PreviousMoodCard;
