import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import { WatchUI } from "../components/WatchUI";
import { BellAlertIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Switch from "react-ios-switch";
import Cookies from "js-cookie";

function device() {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getData() {
      setUser(Cookies.get());
    }
    getData();
  }, []);

  return (
    // <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
    <div>
      <Header />
      <div className=" max-w-sm mx-auto px-4 pt-4 overflow-y-hidden overflow-x-hidden relative top-10">
        <div className="pt-4">
          <span className="font-bold text-4xl capitalize">
            {user.firstname}
          </span>
          <span className="font-bold text-4xl ">'s Moodr</span>
        </div>
      </div>

      <div className="max-w-sm mx-auto overflow-y-hidden overflow-x-hidden relative top-10">
        <p className="font-bold text-2xl px-4 py-4">Watch Faces</p>
        <div className="px-4 flex overflow-x-auto gap-4 scrollbar-hide w-screen">
          {WatchUI.map((item) => {
            return <Image className="w-24" src={item} alt="Watch UI" />;
          })}
        </div>

        <p className="font-bold text-2xl px-4 pt-4">Settings</p>
        <div className="mt-2 mb-2 mx-4 shadow-md flex justify-between py-4 px-4 items-center rounded-[10px]">
          <span className="text-sm font-semibold flex items-center">
            {" "}
            <span className="text-3xl pr-4">
              <EnvelopeIcon className="w-6 text-[#B0CB93]" />
            </span>
            Notification
          </span>
          <Switch
            checked={undefined}
            offColor="rgb(233,233,234)"
            onChange={(checked) => {}}
          />
        </div>

        <div className="mt-2 mb-2 mx-4 shadow-md flex justify-between py-4 px-4 items-center rounded-[10px]">
          <span className="text-sm font-semibold flex items-center">
            {" "}
            <span className="text-3xl pr-4">
              <BellAlertIcon className="w-6 text-[#B0CB93]" />
            </span>
            Haptic Alert
          </span>
          <Switch
            checked={undefined}
            offColor="rgb(233,233,234)"
            onChange={(checked) => {}}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default device;
