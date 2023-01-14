import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import loginsuc from "../asset/loginsuc.svg";

function LoginSuccessful() {
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

    router.push("/login");
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }

  return (
    <div className="w-full h-screen">
      <div className="w-full flex flex-col justify-center items-center">
        <Image
          className="w-54 fixed top-44"
          src={loginsuc}
          alt="sign up photo"
        />

        <div className="w-full fixed bottom-0 right-0 left-0 pb-10">
          <div className="flex flex-col w-full px-4 py-4 font-bold text-4xl justify-center items-center pb-8">
            <h1 className="py-2">Welcome Back,</h1>
            <p className="text-[#B0CB93] capitalize">{user.firstname}!</p>
          </div>
          <div className="flex justify-between px-4 py-8 w-full">
            <button
              onClick={() => {
                router.push("/");
              }}
              className="rounded-full w-full h-14 bg-[#B0CB93] text-white font-bold text-lg shadow-md"
            >
              Continue
            </button>
          </div>
          <div className="text-gray-400 flex text-sm w-full justify-center">
            Have a different account?
            <button onClick={handleLogout} className="text-blue-400 pl-2">
              Switch Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSuccessful;
