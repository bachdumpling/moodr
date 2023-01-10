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
import Header from "../components/Header";
import Footer from "../components/Footer";

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

  console.log(user);

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
      {profilePage}
      {/* {user.length > 0 ? profilePage : <LoginForm />} */}

      <Footer />
    </div>
  );
}

export default profile;
