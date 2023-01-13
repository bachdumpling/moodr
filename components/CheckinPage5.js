import Link from "next/link";
import React from "react";
import CheckinHeader from "./CheckinHeader";
import Router, { useRouter } from "next/router";

function CheckinPage5({ mood, emoji, setCurrentPage }) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const router = useRouter();

  return (
    <>
      {/* <CheckinHeader previousPage={previousPage} />  */}
      <div className="w-screen flex flex-col justify-center items-center mt-6">
        <div className="text-center pt-12">
          <p className="text-2xl px-6 text-[#ee7b69] font-bold">Summary</p>
          <p className="text-sm text-gray-400 pt-2 px-6">{formattedDate}</p>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center py-6">
        <p className="text-sm py-4">You are probably feeling:</p>
        <div className="border w-32 h-16 flex justify-center items-center rounded-[10px] text-lg space-x-2">
          <p>{emoji}</p>
          <p>{mood}</p>
        </div>
      </div>
      <footer className="z-10 flex flex-col gap-y-2 justify-between px-4 py-4 pb-14 fixed bottom-0 left-0 right-0">
        <button
          onClick={() => {
            setCurrentPage(0)
          }}
          className="checkin-btn border-[#ee7b69] border bg-white text-[#ee7b69]"
        >
          Restart
        </button>
        <button
          onClick={() => {
            router.push("/");
          }}
          className="checkin-btn bg-[#ee7b69]"
        >
          Back to Home
        </button>
      </footer>
    </>
  );
}

export default CheckinPage5;
