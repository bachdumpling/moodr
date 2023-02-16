import React, { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PreviousMoodCard from "../components/PreviousMoodCard";
import { useRouter } from "next/router";
import { api } from "../components/Api";
import Cookies from "js-cookie";

function Previousmood() {
  const router = useRouter();
  const [result, setResult] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getData() {
      setUser(Cookies.get());
      if (user.id) {
        const results = await fetch(api + "/results/" + user.id).then((res) =>
          res.json()
        );
        setResult(results);
      }
    }
    getData();
  }, [user.id]);

  return (
    <>
      <Header />
      <div className=" max-w-sm mx-auto px-4 pt-4 overflow-y-hidden overflow-x-hidden relative top-10">
        <div className="pt-4">
          <h1 className="font-bold text-4xl text-center">My Previous Moods</h1>
        </div>
        <div className="my-[24px] mb-[100px]">
          {result
            .slice()
            .reverse()
            .map((item) => {
              return (
                <PreviousMoodCard
                  result={item}
                  key={item.id}
                  createdAt={item.created_at}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Previousmood;
