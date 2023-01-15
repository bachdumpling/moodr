import PreviousMoodCard from "../components/PreviousMoodCard";
import CustomizeYourMoodr from "../components/CustomizeYourMoodr";
import Link from "next/link";
import Data, {
  questionTable,
  resultTable,
  vitalTable,
} from "../components/Data";
import { useEffect, useState } from "react";
import { api } from "../components/Api";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cookies from "js-cookie";
import { Router, useRouter } from "next/router";
import Welcome from "../components/Welcome";

export default function homePage() {
  const [user, setUser] = useState({});
  const [result, setResult] = useState([]);

  useEffect(() => {
    setUser(Cookies.get());
  }, []);

  if (!user.id) {
    return <Welcome />;
  }

  return <Home user={user} result={result} setResult={setResult} />;
}

export function Home({ user, result, setResult }) {
  const router = useRouter();
  useEffect(() => {
    async function getData() {
      await Promise.all([
        fetch(`${api}/results/${user.id}`)
          .then((res) => res.json())
          .then((results) => {
            setResult(results);
          }),
        fetch(`${api}/questions`)
          .then((res) => res.json())
          .then((questions) => {
            questions.forEach((question) => {
              questionTable.add(question.user_id, {
                "Is there any event affecting your mood today?":
                  question.answer_1,
                "How does this event affect your thoughts and behavior?":
                  question.answer_2,
                "Mood Scale": question.answer_3,
              });
            });
          }),

        fetch(`${api}/vitals`)
          .then((res) => res.json())
          .then((vitals) => {
            vitals.forEach((vital) => {
              vitalTable.add(vital.user_id, {
                heartRate: vital.heart_rate,
                wristTemperature: vital.wrist_temperature,
              });
            });
          }),
      ]);
    }
    getData();
  }, [user.id]);

  return (
    // <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
    <div className="">
      <Header />

      <div className=" max-w-sm mx-auto px-4 pt-4 overflow-y-hidden overflow-x-hidden relative top-10">
        <div className="py-4">
          <h1 className="font-bold text-4xl capitalize">
            Hi, {user.firstname}
          </h1>
          <p className="text-md font-bold text-gray-400 py-1">Welcome back!</p>
        </div>

        <div className="bg-[#B0CB93] text-white py-4 px-4 rounded-[10px] shadow-md">
          {/* <div className="border absolute rounded-full w-32 h-32" ></div> */}
          <p className="font-bold text-2xl">Find Your Mood</p>
          <p className="w-5/6 text-sm">
            Let's find out how you are feeling by completing a short
            questionnaire!
          </p>

          <Link href="/checkin">
            <button className="mt-4 rounded-full w-full h-14 bg-[#FFFFFF] cursor-pointer text-[#516D33] font-bold text-lg shadow-sm bg-opacity-80">
              Let's Start
            </button>
          </Link>
        </div>

        <div className="mt-[32px]">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold">Previous Moods</p>

            {result.length > 0 ? (
              <button
                onClick={() => {
                  router.push({
                    pathname: "/previousmood",
                    query: { userid: user.id },
                  });
                }}
                className="text-sm text-[#B0CB93]"
              >
                See More
              </button>
            ) : null}
          </div>

          {result.length > 0 ? (
            <div>
              {result
                .slice()
                .reverse()
                .slice(0, 3)
                .map((item) => {
                  return (
                    <PreviousMoodCard
                      createdAt={item.created_at}
                      result={item}
                      key={item.id}
                    />
                  );
                })}
            </div>
          ) : (
            <div className="pt-8  h-12 flex justify-center items-center">
              <p className="text-gray-400">
                Start your first mood check in ...
              </p>
            </div>
          )}

          <div className="mt-[32px] mb-[100px]">
            <p className="text-2xl font-semibold">Customize Your Moodr</p>
            <div>
              <CustomizeYourMoodr user={user} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
