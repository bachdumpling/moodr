import {
  Bars3Icon,
  UserCircleIcon,
  HomeIcon,
  FaceSmileIcon,
  DeviceTabletIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  FaceSmileIcon as FaceSmileIconSolid,
  DeviceTabletIcon as DeviceTabletIconSolid,
} from "@heroicons/react/24/solid";
import PreviousMoodCard from "../components/PreviousMoodCard";
import CustomizeYourMoodr from "../components/CustomizeYourMoodr";
import Link from "next/link";
import Data, { questionTable, userTable, vitalTable } from "../components/Data";
import { useEffect, useState } from "react";
import { api } from "../components/Api";

export default function Home() {
  let questionValue;
  let vitalValue;

  useEffect(() => {
    async function getData() {
      await Promise.all([
        fetch(`${api}/users`)
          .then((res) => res.json())
          .then((users) => {
            users.forEach((user) => {
              userTable.add(user.user_id, {
                username: user.username,
                age: user.age,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
              });
            });
          }),

        fetch(`${api}/questions`)
          .then((res) => res.json())
          .then((questions) => {
            questions.forEach((question) => {
              questionTable.add(question.user_id, {
                "Is there any event affecting your mood today?":
                  question.answer_1,
                "How does this event affect your thoughts and behavior?":
                  question.answer_2,
                "Mood Scale": question.answer_3,
              });
            });
          }),

        fetch(`${api}/vitals`)
          .then((res) => res.json())
          .then((vitals) => {
            vitals.forEach((vital) => {
              vitalTable.add(vital.user_id, {
                heartRate: vital.heart_rate,
                wristTemperature: vital.wrist_temperature,
              });
            });
          }),
      ]);
    }
    getData();
    // questionValue = Object.values(questionTable.get());
    // questionValue = Object.values(questionTable.get(1));
  }, []);

  // console.log(userTable);
  // console.log(questionTable);
  // console.log(vitalTable);

  // console.log(questionValue);
  // console.log(questionValue[0] == "Yes");
  // console.log(questionValue[1] == "Positive")

  // console.log(questionValue[2] == "5" &&
  // vitalValue[0] > 80 &&
  // vitalValue[1] > 95);

  // function checkMood() {
  //   if (questionValue[0] == "Yes") {
  //     if (questionValue[1] == "It makes me feel more positive and motivated.") {
  //       if (questionValue[2] == "1") {
  //       } else if (questionValue[2] == "2") {
  //       } else if (questionValue[2] == "3") {
  //       } else if (questionValue[2] == "4") {
  //       } else if (
  //         questionValue[2] == "5" &&
  //         vitalValue[0] > 80 &&
  //         vitalValue[1] > 95
  //       ) {
  //         return "Happiness";
  //       }
  //     } else if (
  //       questionValue[1] == "It makes me feel more negative and discouraged."
  //     ) {
  //     } else if (
  //       questionValue[1] == "It doesn't really have much of an effect"
  //     ) {
  //     }
  //   } else {
  //   }
  // }

  // console.log(checkMood(questionValue, vitalValue));

  return (
    <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
      <div className="z-10 flex justify-between px-4 py-4 pt-12 border-b-[1px] fixed top-0 left-0 right-0 bg-[#FFFFFF]">
        <Bars3Icon className="w-6 " />
        <Link href="/profile">
          <UserCircleIcon className="w-6 " />
        </Link>
      </div>

      <div className="px-4 overflow-y-hidden overflow-x-hidden relative top-10">
        <div className="py-4">
          <h1 className="font-bold text-4xl">
            Hi Chanbin.
            {/* {user.name} */}
          </h1>
          <p className="text-lg font-bold text-gray-500">Welcome back!</p>
        </div>

        <div className="bg-[#B0CB93] text-white py-4 px-4 rounded-[10px] shadow-md">
          {/* <div className="border absolute rounded-full w-32 h-32" ></div> */}
          <p className="font-bold text-2xl">Find Your Mood</p>
          <p className="w-5/6 text-sm">
            Let's find out how you are feeling by completing a short
            questionnaire!
          </p>

          <button className="mt-4 rounded-full w-full h-14 bg-[#FFFFFF] cursor-pointer text-[#516D33] font-bold text-lg shadow-sm bg-opacity-80">
            {/* <button>Let's Start</button> */}
            Let's Start
          </button>
        </div>

        <div className="mt-[32px]">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold">Previous Moods</p>
            <p className="text-sm text-green-500">See More</p>
          </div>

          <div>
            <PreviousMoodCard />
            <PreviousMoodCard />
            <PreviousMoodCard />
          </div>

          <div className="mt-[32px] mb-[126px]">
            <p className="text-2xl font-semibold">Customize Your Moodr</p>
            <div>
              <CustomizeYourMoodr />
              <CustomizeYourMoodr />
            </div>
          </div>
        </div>
      </div>

      <footer className="z-10 flex justify-between px-16 py-4 pb-8 border-t-[1px] fixed bottom-0 left-0 right-0 bg-[#FFFFFF]">
        <Link href="/">
          <div className="flex flex-col items-center">
            <HomeIcon className="w-6" />
            <p className="text-xs">Home</p>
          </div>
        </Link>

        <Link href="/checkin">
          <div className="flex flex-col items-center">
            <FaceSmileIcon className="w-6" />
            <p className="text-xs">Check In</p>
          </div>
        </Link>

        <div className="flex flex-col items-center">
          <DeviceTabletIcon className="w-6" />
          <p className="text-xs">Moodr</p>
        </div>
      </footer>
    </div>
  );
}
