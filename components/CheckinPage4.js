import React from "react";
import CheckinHeader from "./CheckinHeader";
import Activity from "../asset/Activity.svg";
import Heartbeat from "../asset/Heartbeat.svg";
import ThermometerSimple from "../asset/ThermometerSimple.svg";
import Image from "next/image";

function CheckinPage4({
  nextPage,
  previousPage,
  wristTemp,
  heartRate,
  setHeartRate,
  setWristTemp,
}) {
  console.log(heartRate, wristTemp);

  return (
    <>
      <CheckinHeader previousPage={previousPage} />
      <div className="w-screen flex flex-col justify-center items-center mt-6">
        <div className="text-center pt-12">
          <p className="text-2xl px-6 text-[#ee7b69] font-bold">
            Vitals information
          </p>
          <p className="text-sm text-gray-400 pt-2 px-6">
            Input your heart rate and wrist temperature
          </p>
        </div>
      </div>

      <div className="grid mt-8 mb-8 gap-y-3 grid-flow-col grid-rows-3 grid-cols-1">
        <div className="flex justify-between items-center h-20 rounded-[10px] mx-4 shadow-lg px-8">
          <div className="flex w-4/6 h-full justify-start items-center">
            <Image src={Heartbeat} className="w-8 mr-8" alt="Heart beat" />
            <label>Heart Rate</label>
          </div>
          <input
            onChange={(e) => {
              setHeartRate(e.target.value);
            }}
            type="text"
            required
            className="w-[4.5rem] h-9 bg-gray-100 appearance-none rounded py-2 pl-4 pr-2 text-gray-700 focus:border-[#ee7b69] focus:outline-none focus:border"
          />
        </div>

        <div className="flex justify-between items-center h-20 rounded-[10px] mx-4 shadow-lg px-8">
          <div className="flex w-4/6 h-full justify-start items-center">
            <Image
              src={ThermometerSimple}
              className="w-8 mr-8"
              alt="Heart beat"
            />
            <label className="">Wrist Temperature</label>
          </div>
          <input
            onChange={(e) => {
              setWristTemp(e.target.value);
            }}
            type="text"
            required
            className="w-[4.5rem] h-9 bg-gray-100 appearance-none rounded py-2 pl-4 pr-2 text-gray-700 focus:border-[#ee7b69] focus:outline-none focus:border"
          />
        </div>
      </div>

      <footer className="z-10 flex justify-between px-4 py-4 pb-14 fixed bottom-0 left-0 right-0">
        {heartRate && wristTemp ? (
          <button onClick={nextPage} className="checkin-btn bg-[#ee7b69]">
            Next
          </button>
        ) : (
          <button
            disabled="true"
            onClick={nextPage}
            className="checkin-btn bg-[#ee7b69] opacity-40"
          >
            Next
          </button>
        )}
      </footer>
    </>
  );
}

export default CheckinPage4;
