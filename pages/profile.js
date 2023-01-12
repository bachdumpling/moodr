import React from "react";
import {
  Bars3Icon,
  UserCircleIcon,
  HomeIcon,
  FaceSmileIcon,
  DeviceTabletIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  BellAlertIcon,
  PencilIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
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
import LoginForm from "../components/LoginForm";
import { api } from "../components/Api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Switch from "react-ios-switch/lib/Switch";

function profile() {
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   fetch(`${api}/me`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setUser(data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  function logout() {
    fetch(`${api}/logout`, {
      method: "DELETE",
    });
  }

  const profilePage = (
    <div className="px-4 overflow-y-hidden overflow-x-hidden relative top-10">
      <p>Hello</p>
      <LoginForm />
      <button onClick={logout} className="border">
        Log Out
      </button>
    </div>
  );

  return (
    <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
      <Header />

      <div className="px-4 overflow-y-hidden overflow-x-hidden relative top-10 w-screen space-y-2 pb-10">
        <div className="pt-4">
          <h1 className="font-bold text-4xl">My Profile</h1>
        </div>

        <div className="py-6 flex justify-start items-center">
          <div className="border-2 w-24 h-24 rounded-full mr-6"></div>
          <div>
            <p className="text-2xl font-bold">Chanbin Moon</p>
            <p className="text-sm text-gray-500">21 Years Old</p>
          </div>

          <PencilIcon className="w-5 ml-6 text-gray-500" />
        </div>

        <div className="flex-col mt-2 mb-2 shadow-md flex px-4 items-center rounded-[10px]">
          <div className="flex w-full justify-between py-4 border-b-[0.1px]">
            <span className="text-sm font-semibold flex items-center">
              <EnvelopeIcon className="w-6 mr-4 text-green-600" />
              Email
            </span>

            <ChevronRightIcon className="w-6 text-gray-400" />
          </div>

          <div className="flex w-full justify-between py-4 border-b-[0.1px]">
            <span className="text-sm font-semibold flex items-center">
              <DeviceTabletIcon className="w-6 mr-4 text-green-600" />
              My Device
            </span>

            <ChevronRightIcon className="w-6 text-gray-400" />
          </div>

          <div className="flex w-full justify-between py-4">
            <span className="text-sm font-semibold flex items-center">
              <BellAlertIcon className="w-6 mr-4 text-green-600" />
              Notification
            </span>

            <Switch
              checked={undefined}
              offColor="rgb(233,233,234)"
              onChange={(checked) => {}}
            />
          </div>
        </div>

        <div className="flex-col mt-2 mb-2 shadow-md flex px-4 items-center rounded-[10px]">
          <div className="flex w-full justify-between py-4 border-b-[0.1px]">
            <span className="text-sm font-semibold flex items-center">
              <ShieldCheckIcon className="w-6 mr-4 text-green-600" />
              Privacy Policy
            </span>

            <ChevronRightIcon className="w-6 text-gray-400" />
          </div>

          <div className="flex w-full justify-between py-4 border-b-[0.1px]">
            <span className="text-sm font-semibold flex items-center">
              <NewspaperIcon className="w-6 mr-4 text-green-600" />
              Terms of Service
            </span>

            <ChevronRightIcon className="w-6 text-gray-400" />
          </div>

          <div className="flex w-full justify-between py-4">
            <span className="text-sm font-semibold flex items-center">
              <QuestionMarkCircleIcon className="w-6 mr-4 text-green-600" />
              Help & Support
            </span>

            <ChevronRightIcon className="w-6 text-gray-400" />
          </div>
        </div>

        <div className="flex-col my-4 shadow-lg flex px-4 items-center rounded-[10px] h-full">
          <button className="flex w-full justify-between py-4">
            <p className="text-sm text-red-500">Log Out</p>
          </button>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default profile;
