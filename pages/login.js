import {
  ChevronLeftIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import loginSvg from "../asset/loginSvg.svg";
import { api } from "../components/Api";
import { getSession, signIn, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    fetch(api + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            Cookies.set("id", user.id);
            Cookies.set("username", user.username);
            Cookies.set("firstname", user.firstname);
            Cookies.set("lastname", user.lastname);
            Cookies.set("email", user.email);
            Cookies.set("age", user.age);
          });
        }
      })
      .then(() => {
        router.push("/loginsuccessful");
      });
  }
  return (
    // <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
      <div className="max-w-md mx-auto">
      <Link href="/">
        <div className="z-10 flex justify-between px-4 py-4 pt-8 top-0 left-0 right-0">
          <ChevronLeftIcon className="w-6" />
        </div>
      </Link>
      <div className="w-full h-full flex flex-col justify-center items-center pt-32">
        <Image className="w-40" src={loginSvg} alt="login image" />

        <div className="pt-4 flex justify-start flex-col w-full px-4 py-4">
          <h1 className="font-bold text-4xl">Welcome Back!</h1>
          <p className="text-gray-400">Log in to continue</p>

          <form className=" mt-6 space-y-2">
            <div className="text-sm relative">
              <div className="absolute py-4 px-4 text-[#B0CB93] ">
                <EnvelopeIcon className="w-4" />
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
              <div className="absolute py-4 px-4 text-[#B0CB93] ">
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
              {username && password ? (
                <button
                  onClick={handleLogin}
                  className="rounded-full w-full h-14 bg-[#B0CB93] text-white font-bold text-lg shadow-md"
                >
                  Log In
                </button>
              ) : (
                <button
                  disabled={true}
                  className="opacity-50 rounded-full w-full h-14 bg-[#B0CB93] text-white font-bold text-lg shadow-md"
                >
                  Log In
                </button>
              )}
            </div>
          </form>

          <div className="text-gray-400 flex text-sm w-full justify-center">
            New to Moodr?
            <p className="text-blue-400 pl-2">
              <Link href="/signup">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
