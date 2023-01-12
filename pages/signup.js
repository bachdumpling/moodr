import {
  ChevronLeftIcon,
  EnvelopeIcon,
  LockClosedIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { use, useState } from "react";
import signupSvg from "../asset/signupSvg.svg";

function signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    console.log(firstname, lastname, email, username, password);
  }

  return (
    <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
      <Link href="/welcome">
        <ChevronLeftIcon className="w-6 my-4 mx-4" />
      </Link>
      <div className="w-screen h-full flex flex-col justify-center items-center pt-6">
        <Image src={signupSvg} />

        <div className="pt-4 flex justify-start flex-col w-full px-4 py-4">
          <h1 className="font-bold text-4xl">Create Account</h1>
          <p className="text-gray-400">Create a new account</p>

          <form className="mt-6 space-y-2">
            <div className="text-sm ">
              <div className="fixed py-4 px-4 text-green-400 ">
                <UserIcon className="w-4" />
              </div>
              <input
                type="text"
                id="username"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="auth-field"
              />
            </div>

            <div className="text-sm ">
              <div className="fixed py-4 px-4 text-green-400 ">
                <UserIcon className="w-4" />
              </div>
              <input
                type="text"
                id="username"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="auth-field"
              />
            </div>

            <div className="text-sm ">
              <div className="fixed py-4 px-4 text-green-400 ">
                <EnvelopeIcon className="w-4" />
              </div>
              <input
                type="text"
                id="username"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-field"
              />
            </div>
            <div className="text-sm ">
              <div className="fixed py-4 px-4 text-green-400 ">
                <TagIcon className="w-4" />
              </div>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="auth-field"
              />
            </div>
            <div className="text-sm ">
              <div className="fixed py-4 px-4 text-green-400 ">
                <LockClosedIcon className="w-4" />
              </div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-field"
              />
            </div>
            <div className="flex justify-between py-6">
              {username && password && firstname && lastname && email? (
                <button
                  onClick={handleLogin}
                  className="rounded-full w-full h-14 bg-[#B0CB93] text-white font-bold text-lg shadow-md"
                >
                  Sign Up
                </button>
              ) : (
                <button
                  disabled="true"
                  className="opacity-50 rounded-full w-full h-14 bg-[#B0CB93] text-white font-bold text-lg shadow-md"
                >
                  Sign Up
                </button>
              )}
            </div>
          </form>

          <div className="text-gray-400 flex text-sm w-full justify-center">
            Already have an account?
            <p className="text-blue-400 pl-2">
              <Link href="/login">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;
