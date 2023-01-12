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

// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   const session = await getSession(context);

//   // Pass data to the page via props
//   return { props: { data: session } };
// }

function login({data}) {
  // const { data: session, status } = useSession()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // console.log(api + "/login");
  // console.log(session);

  function handleLogin(e) {
    e.preventDefault();
    fetch(api + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user);
        });
      }
    });
    // signIn(username,`${api} + "/"`)
  }

  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch(api + "/logged_in")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            console.log(user)
            setUser(user)
          });
        }
      })
  }, [])

  return (
    <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
      <Link href="/welcome">
        <ChevronLeftIcon className="w-6" />
      </Link>
      <div className="w-screen h-full flex flex-col justify-center items-center pt-16">
        <Image src={loginSvg} alt="login image" />

        <div className="pt-4 flex justify-start flex-col w-full px-4 py-4">
          <h1 className="font-bold text-4xl">Welcome Back!</h1>
          <p className="text-gray-400">Log in to continue</p>

          <form className="mt-6 space-y-2">
            <div className="text-sm ">
              <div className="fixed py-4 px-4 text-green-400 ">
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

export default login;
