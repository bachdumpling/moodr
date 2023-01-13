import React from "react";
import CheckinHeader from "./CheckinHeader";

function CheckinPage3({ nextPage, previousPage, answer3, setAnswer3 }) {
  // console.log(answer3)

  return (
    <>
      <CheckinHeader previousPage={previousPage} />
      <div className="w-screen flex flex-col justify-center items-center mt-6">
        <div className="text-center pt-12">
          <p className="text-2xl px-6 text-blue-400 font-bold">
            On this scale, which Emoji is most likely what you are feeling?
          </p>
          <p className="text-sm text-gray-400 pt-2">
            Choose an option that best describes your feeling
          </p>
        </div>

        <div className="grid grid-flow-row grid-rows-1 grid-cols-5  w-11/12 my-8 px-4 py-6 shadow-xl rounded-[10px]">
          <div className="flex flex-col justify-center items-center">
            <label className="text-3xl">😢</label>
            <p className="text-xs pt-2 pb-3">Very Bad</p>
            <div className="border rounded-full w-6 h-6 flex justify-center items-center border-gray-300">
              <input
                onClick={() => {
                  setAnswer3("1");
                }}
                type="radio"
                checked={answer3 === "1"}
                value="1"
                name="1"
                className="w-4 h-4 appearance-none rounded-full checked:bg-blue-400"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <label className="text-3xl">🙁</label>
            <p className="text-xs pt-2 pb-3">Bad</p>
            <div className="border rounded-full w-6 h-6 flex justify-center items-center border-gray-300">
              <input
                onClick={() => {
                  setAnswer3("2");
                }}
                type="radio"
                checked={answer3 === "2"}
                value="2"
                name="2"
                className="w-4 h-4 appearance-none rounded-full checked:bg-blue-400"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <label className="text-3xl">😐</label>
            <p className="text-xs pt-2 pb-3">Okay</p>
            <div className="border rounded-full w-6 h-6 flex justify-center items-center border-gray-300">
              <input
                onClick={() => {
                  setAnswer3("3");
                }}
                type="radio"
                checked={answer3 === "3"}
                value="3"
                name="3"
                className="w-4 h-4 appearance-none rounded-full checked:bg-blue-400"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <label className="text-3xl">🙂</label>
            <p className="text-xs pt-2 pb-3">Good</p>
            <div className="border rounded-full w-6 h-6 flex justify-center items-center border-gray-300">
              <input
                onClick={() => {
                  setAnswer3("4");
                }}
                type="radio"
                checked={answer3 === "4"}
                value="4"
                name="4"
                className="w-4 h-4 appearance-none rounded-full checked:bg-blue-400"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <label className="text-3xl">😄</label>
            <p className="text-xs pt-2 pb-3">Very Good</p>
            <div className="border rounded-full w-6 h-6 flex justify-center items-center border-gray-300">
              <input
                onClick={() => {
                  setAnswer3("5");
                }}
                type="radio"
                checked={answer3 === "5"}
                value="5"
                name="5"
                className="w-4 h-4 appearance-none rounded-full checked:bg-blue-400"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="z-10 flex justify-between px-4 py-4 pb-14 fixed bottom-0 left-0 right-0">
        {answer3 ? (
          <button onClick={nextPage} className="checkin-btn bg-blue-400">
            Next
          </button>
        ) : (
          <button
            disabled="true"
            onClick={nextPage}
            className="checkin-btn bg-blue-400 opacity-40"
          >
            Next
          </button>
        )}
      </footer>
    </>
  );
}

export default CheckinPage3;
