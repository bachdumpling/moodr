import React from "react";
import {
  DeviceTabletIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  BellAlertIcon,
  PencilIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Switch from "react-ios-switch/lib/Switch";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function Profile() {
  const router = useRouter();
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getData() {
      setUser(Cookies.get());
    }
    getData();
  }, []);

  function handleLogout() {
    const cookies = Cookies.get();
    Object.keys(cookies).forEach((cookie) => {
      Cookies.remove(cookie);
    });

    router.push("/");
  }

  return (
    // <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
    <div>
      <Header />

      <div className="max-w-sm mx-auto px-4 pt-4 overflow-y-hidden overflow-x-hidden relative top-10">
        <div className="pt-4">
          <h1 className="font-bold text-4xl">My Profile</h1>
        </div>

        <div className="py-6 flex justify-start items-center">
          <div className="w-24 h-24 rounded-full mr-6">
            <Image
              width={100}
              height={100}
              className=" w-24 h-24 rounded-full object-contain"
              alt="avatar"
            />
          </div>
          <div>
            <p className="text-2xl font-bold capitalize">
              {user.firstname} {user.lastname}
            </p>
            <p className="text-sm text-gray-500">{user.age} Years Old</p>
          </div>

          <PencilIcon className="w-5 ml-6 text-gray-500" />
        </div>

        <div className="flex-col mt-2 mb-2 shadow-md flex px-4 items-center rounded-[10px]">
          <div className="flex w-full justify-between py-4 border-b-[0.1px]">
            <span className="text-sm font-semibold flex items-center">
              <EnvelopeIcon className="w-6 mr-4 text-[#B0CB93]" />
              Email
            </span>

            <ChevronRightIcon className="w-6 text-gray-400" />
          </div>

          <div className="flex w-full justify-between py-4 border-b-[0.1px]">
            <span className="text-sm font-semibold flex items-center">
              <DeviceTabletIcon className="w-6 mr-4 text-[#B0CB93]" />
              My Device
            </span>

            <ChevronRightIcon className="w-6 text-gray-400" />
          </div>

          <div className="flex w-full justify-between py-4">
            <span className="text-sm font-semibold flex items-center">
              <BellAlertIcon className="w-6 mr-4 text-[#B0CB93]" />
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
              <ShieldCheckIcon className="w-6 mr-4 text-[#B0CB93]" />
              Privacy Policy
            </span>

            <ChevronRightIcon className="w-6 text-gray-400" />
          </div>

          <div className="flex w-full justify-between py-4 border-b-[0.1px]">
            <span className="text-sm font-semibold flex items-center">
              <NewspaperIcon className="w-6 mr-4 text-[#B0CB93]" />
              Terms of Service
            </span>

            <ChevronRightIcon className="w-6 text-gray-400" />
          </div>

          <div className="flex w-full justify-between py-4">
            <span className="text-sm font-semibold flex items-center">
              <QuestionMarkCircleIcon className="w-6 mr-4 text-[#B0CB93]" />
              Help & Support
            </span>

            <ChevronRightIcon className="w-6 text-gray-400" />
          </div>
        </div>

        <div className="flex-col my-4 shadow-lg flex px-4 items-center rounded-[10px] h-full mb-[100px]">
          <button
            onClick={handleLogout}
            className="flex w-full justify-between py-4"
          >
            <p className="text-sm text-[#EE7B69]">Log Out</p>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
