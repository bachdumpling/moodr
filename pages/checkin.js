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
import Data, { questionTable, userTable, vitalTable } from "../components/Data";
import CheckinPage3 from "../components/CheckinPage3";
import CheckinPage4 from "../components/CheckinPage4";

function checkin() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [wristTemp, setWristTemp] = useState("");

  function nextPage(e) {
    setCurrentPage(currentPage + 1);
  }

  function previousPage(e) {
    setCurrentPage(currentPage - 1);
  }
  // console.log(nextPage);
  // console.log(userTable);
  // console.log(questionTable);
  // console.log(vitalTable);

  return (
    <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
      <div className="overflow-y-hidden overflow-x-hidden relative top-10">
        <div className="">
          {currentPage === 0 && <CheckinPage0 nextPage={nextPage} />}

          <form
          //   onSubmit={handleSubmit}
          >
            {currentPage === 1 && (
              <CheckinPage1
                nextPage={nextPage}
                previousPage={previousPage}
                answer1={answer1}
                setAnswer1={setAnswer1}
              />
            )}
            {currentPage === 2 && (
              <CheckinPage2
                nextPage={nextPage}
                previousPage={previousPage}
                setAnswer2={setAnswer2}
                answer2={answer2}
              />
            )}
            {currentPage === 3 && (
              <CheckinPage3
                nextPage={nextPage}
                previousPage={previousPage}
                answer3={answer3}
                setAnswer3={setAnswer3}
              />
            )}
            {currentPage === 4 && (
              <CheckinPage4
                nextPage={nextPage}
                previousPage={previousPage}
                setHeartRate={setHeartRate}
                setWristTemp={setWristTemp}
                heartRate ={heartRate}
                wristTemp={wristTemp}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default checkin;
