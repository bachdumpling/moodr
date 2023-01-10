import React from "react";
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
import LoginForm from "../components/LoginForm";
import { api } from "../components/Api";

function profile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${api}/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(user)

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
      <div className="z-10 flex justify-between px-4 py-4 pt-12 border-b-[1px] fixed top-0 left-0 right-0 bg-[#FFFFFF]">
        <Bars3Icon className="w-6 " />
        <Link href="/profile">
          <UserCircleIcon className="w-6 " />
        </Link>
      </div>
      {profilePage}
      {/* {user.length > 0 ? profilePage : <LoginForm />} */}

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

export default profile;
