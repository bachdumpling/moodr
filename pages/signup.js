import {
  ChevronLeftIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  LockClosedIcon,
  TagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon, TicketIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { use, useState } from "react";
import signupSvg from "../asset/signupSvg.svg";
import { api } from "../components/Api";

function signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleSignUp(e) {
    e.preventDefault();
    fetch(api + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        username,
        password,
        age,
      }),
    })
      .then((r) => {
        r.json();
      })
      .then((user) => {});
  }

  const popup = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212] bg-opacity-40">
      <div className="bg-white shadow-lg p-4 text-black rounded-[10px] w-11/12 h-72 flex justify-around flex-col items-center">
        <div className="w-full flex justify-end px-2">
          <XMarkIcon
            onClick={() => {
              setOpen(!open);
            }}
            className="w-6"
          />
        </div>
        <CheckCircleIcon className="text-[#B0CB93] w-16 mb-4" />

        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-semibold pb-[4px]">Sign up successful!</p>
          <p className="text-sm text-gray-400">New account created</p>
        </div>
        <button
          onClick={() => {
            router.push("/login");
          }}
          className="w-28 text-[#B0CB93] h-10 border border-[#B0CB93] rounded-full text-sm my-4"
        >
          Log In
        </button>
      </div>
    </div>
  );

  return (
    // <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
    <div className="">
      <Link href="/">
        <div className="flex justify-between px-4 py-4 pt-8 fixed top-0 left-0 right-0">
          <ChevronLeftIcon className="w-6" />
        </div>
      </Link>
      <div className="w-full h-screen flex flex-col justify-center items-center pt-16">
        <Image className="w-40" src={signupSvg} alt="sign up photo" />

        <div className="pt-4 flex justify-start flex-col w-full px-4 py-4">
          <h1 className="font-bold text-4xl">Create Account</h1>
          <p className="text-gray-400">Create a new account</p>

          <form onClick={handleSignUp} className="mt-6 space-y-2">
            <div className="grid grid-cols-2 grid-flow-row gap-2">
              <div className="text-sm relative">
                <div className=" absolute py-4 px-4 text-green-400 ">
                  <UserIcon className="w-4" />
                </div>
                <input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="auth-field"
                />
              </div>

              <div className="text-sm relative">
                <div className=" absolute py-4 px-4 text-green-400 ">
                  <UserIcon className="w-4" />
                </div>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="auth-field"
                />
              </div>
            </div>

            <div className="text-sm relative">
              <div className=" absolute py-4 px-4 text-green-400 ">
                <EnvelopeIcon className="w-4" />
              </div>
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-field"
              />
            </div>

            <div className="text-sm relative">
              <div className=" absolute py-4 px-4 text-green-400 ">
                <FaceSmileIcon className="w-4" />
              </div>
              <input
                type="text"
                id="age"
                placeholder="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="auth-field"
              />
            </div>

            <div className="text-sm relative">
              <div className=" absolute py-4 px-4 text-green-400 ">
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
            <div className="text-sm relative">
              <div className=" absolute py-4 px-4 text-green-400 ">
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
              {username && password && firstname && lastname && email ? (
                <button
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="rounded-full w-full h-14 bg-[#B0CB93] text-white font-bold text-lg shadow-md"
                >
                  Sign Up
                </button>
              ) : (
                <button
                  disabled={true}
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
      {open && popup}
    </div>
  );
}

export default signup;
