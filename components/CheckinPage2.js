import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import CheckinHeader from "./CheckinHeader";

function CheckinPage2({ nextPage, previousPage, answer2, setAnswer2 }) {
  console.log(answer2);

  return (
    <>
      <CheckinHeader previousPage={previousPage} />
      <div className="w-screen flex flex-col justify-center items-center mt-6">
        <div className="text-center pt-12">
          <p className="text-2xl px-6 text-[#F4B667] font-bold">
            How does this event affect your thoughts and behavior?
          </p>
          <p className="text-sm text-gray-400 pt-2">
            Choose an option that best describes your feeling
          </p>
        </div>
      </div>

      <div className="grid mt-8 mb-8 gap-y-3 ">
        <div className="flex justify-between items-center h-20 rounded-[10px] mx-4 px-4 shadow-lg">
          <label className="text-sm">
            It makes me feel more positive and motivated
          </label>
          <input
            onClick={() => {
              setAnswer2("positive");
            }}
            checked={answer2 === "positive"}
            type="checkbox"
            value="positive"
            className="h-6 w-6 bg-gray-100 rounded-[5px] checked:bg-[#F4B667] appearance-none"
          />
        </div>

        <div className="flex justify-between items-center h-20 rounded-[10px] mx-4 px-4 shadow-lg">
          <label className="text-sm">
            It doesn't really have much of an effect
          </label>
          <input
            onClick={() => {
              setAnswer2("neutral");
            }}
            checked={answer2 === "neutral"}
            type="checkbox"
            value="neutral"
            className="h-6 w-6 bg-gray-100 rounded-[5px] checked:bg-[#F4B667] appearance-none"
          />
        </div>
        <div className="flex justify-between items-center h-20 rounded-[10px] mx-4 px-4 shadow-lg">
          <label className="text-sm">
            It makes me feel more negative and discouraged
          </label>
          <input
            onClick={() => {
              setAnswer2("negative");
            }}
            checked={answer2 === "negative"}
            type="checkbox"
            value="negative"
            className="h-6 w-6 bg-gray-100 rounded-[5px] checked:bg-[#F4B667] appearance-none"
          />
        </div>
      </div>

      <footer className="z-10 flex justify-between px-4 py-4 pb-14 fixed bottom-0 left-0 right-0">
        {answer2 ? (
          <button onClick={nextPage} className="checkin-btn bg-[#F4B667]">
            Next
          </button>
        ) : (
          <button
            disabled="true"
            onClick={nextPage}
            className="checkin-btn bg-[#F4B667] opacity-40"
          >
            Next
          </button>
        )}
      </footer>
    </>
  );
}

export default CheckinPage2;
