import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import { WatchUI } from "../components/WatchUI";
import { BellAlertIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Switch from "react-ios-switch";

function device() {
  return (
    <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
      <Header />
      <div className="px-4 overflow-y-hidden overflow-x-hidden relative top-10">
        <div className="pt-4">
          <h1 className="font-bold text-3xl">
            Chanbin's Moodr
            {/* {user.name} */}
          </h1>
        </div>
      </div>

      <div className="overflow-y-hidden overflow-x-hidden relative top-10">
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
              <EnvelopeIcon className="w-6 text-green-600" />
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
              <BellAlertIcon className="w-6 text-green-600" />
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
