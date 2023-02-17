import Image from "next/image";
import MoodFinderLandingPage from "../asset/MoodFinderLandingPage.svg";
import React, { useState } from "react";
import Link from "next/link";
import { DiFirefox } from "react-icons/di";
import { AiFillChrome } from "react-icons/ai";
import { FaEdge } from "react-icons/fa";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

function Welcome() {
  const [popup, setPopup] = useState(true);

  const viewInMobileClick = () => {
    const event = new KeyboardEvent("keydown", {
      code: "KeyM",
      metaKey: true,
      altKey: true,
    });
    console.log("event", event);

    document.dispatchEvent(event);
  };

  return (
    <>
      {/* <button onClick={viewInMobileClick}>
      View In Mobile Mode
    </button> */}
      <div className="max-w-md mx-auto">
        <div className="w-full h-full flex flex-col justify-center items-center pt-40">
          <Image
            className=""
            src={MoodFinderLandingPage}
            alt="landing page pic"
          />
          <div className="text-center px-18 pt-12">
            <p className="text-4xl text-[#B0CB93] font-bold">
              Welcome to Moodr!
            </p>
            <p className="px-8 mt-4 text-[#999999] font-light">
            Moodr combines your vital informations and answers to generate your current mood!
            </p>
          </div>
        </div>

        <div className="px-8 mt-4">
          <Link href="/login">
            <div className="flex justify-between py-2 bg-[#FFFFFF]">
              <button className="rounded-full w-full h-14 bg-[#B0CB93] text-white font-bold text-lg shadow-md">
                Log In
              </button>
            </div>
          </Link>
          <Link href="/signup">
            <div className="py-2 bg-[#FFFFFF]">
              <button className="rounded-full w-full h-14 bg-white border border-[#B0CB93] text-[#B0CB93] font-bold text-lg shadow-md">
                Create Account
              </button>
            </div>
          </Link>
          <button onClick={() => setPopup(true)}
          className="w-full text-center text-[#B0CB93] hover:underline">
            <div className="py-2 bg-[#FFFFFF]">View Mobile Version</div>
          </button>
        </div>
      </div>

      {popup && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="w-full h-screen md:w-[550px] md:h-[800px] bg-white rounded-lg flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <p className="text-4xl font-bold">Welcome to Moodr!</p>
              <div className="flex flex-col justify-center items-center mt-6 space-y-2">
                <ExclamationCircleIcon className="h-6 w-6 text-[#B0CB93]" />
                <h1 className="font-semibold text-xl">Mobile Version Access</h1>
              </div>
            </div>
            <div className=" w-full p-4">
              <div className="font-bold text-xl flex items-center ml-1">
                <DiFirefox className="text-3xl mr-2" />
                <p>Firefox</p>
              </div>
              <div className="">
                <ul className="text-[#999999] list-disc pl-7 py-2 space-y-6">
                  <li className="text-sm pl-4">
                    In Windows/Linux, press
                    <span className="text-black">
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px] text-center">
                        Ctrl
                      </span>
                      +
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px] text-center">
                        Shift
                      </span>
                      +
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px]">
                        M
                      </span>
                    </span>
                  </li>
                  <li className="text-sm pl-4">
                    In MacOS, press
                    <span className="text-black">
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px] text-center">
                        Command
                      </span>
                      +
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px] text-center">
                        Option
                      </span>
                      +
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px]">
                        M
                      </span>
                    </span>
                  </li>
                </ul>
                <p className="pl-11 pt-2 text-sm">
                  You can also find the menu item under (&quot;Tools&quot;), &quot;Web
                  Developer&quot;, &quot;Responsive Design Mode&quot;
                </p>
              </div>
            </div>

            <div className=" w-full p-4">
              <div className="flex ">
                <div className="font-bold text-xl flex items-center">
                  <AiFillChrome className="text-3xl mr-2 ml-1" />
                  <p>Chrome</p>
                </div>
                <span className="font-semibold text-xl mx-4">+</span>
                <div className="font-bold text-xl flex items-center">
                  <FaEdge className="text-2xl mr-2" />
                  <p>Edge</p>
                </div>
              </div>
              <div className="text-sm space-y-4">
                <p className="pl-11 pt-2">
                  You need to have &quot;Developer Tools&quot; open first
                </p>
                <ul className="text-[#999999] list-disc pl-7 py-2 space-y-6">
                  <li className="pl-4">
                    In Windows/Linux, press
                    <span className="text-black">
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px] text-center">
                        Ctrl
                      </span>
                      +
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px] text-center">
                        Shift
                      </span>
                      +
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px]">
                        I
                      </span>
                    </span>
                    Or just
                    <span className="text-black bg-[#D9D9D9] p-1 mx-1 rounded-[4px]">
                      F12
                    </span>
                  </li>
                  <li className="text-sm pl-4">
                    In MacOS, press
                    <span className="text-black">
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px] text-center">
                        Command
                      </span>
                      +
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px] text-center">
                        Option
                      </span>
                      +
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px]">
                        I
                      </span>
                    </span>
                  </li>
                </ul>
                <p className="pl-11 pr-6">
                  Once developer tools is open and focused, you can toggle
                  device emulation
                </p>
                <ul className="text-[#999999] list-disc pl-7 py-2 space-y-6">
                  <li className="pl-4">
                    In Windows/Linux, press
                    <span className="text-black">
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px] text-center">
                        Ctrl
                      </span>
                      +
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px] text-center">
                        Shift
                      </span>
                      +
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px]">
                        M
                      </span>
                    </span>
                  </li>
                  <li className="text-sm pl-4">
                    In MacOS, press
                    <span className="text-black">
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px] text-center">
                        Command
                      </span>
                      +
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px] text-center">
                        Option
                      </span>
                      +
                      <span className=" bg-[#D9D9D9] p-1 mx-1 rounded-[4px]">
                        M
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full flex justify-between mt-2 px-10 bg-[#FFFFFF]">
              <button
                onClick={() => setPopup(false)}
                className="rounded-full w-full h-14 bg-[#B0CB93] text-white font-bold text-lg shadow-md"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Welcome;
