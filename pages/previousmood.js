import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PreviousMoodCard from "../components/PreviousMoodCard";
import { useRouter } from "next/router";

function previousmood({data}) {
//   const router = useRouter();
  //   const [data, setData] = useState([]);
//   const data = JSON.parse(router.query.data);
  //   useEffect(() => {
  //     async function getData() {
  //       setData(router.query.data);
  //     }
  //     getData();
  //     setData(JSON.parse(data))
  //   }, [data]);
  console.log(data);

  return (
    <>
      <Header />
      <div className="px-4 overflow-y-hidden overflow-x-hidden relative top-10">
        <div className="mt-[32px]">
          {/* {data.map((item) => {
            return <PreviousMoodCard result={item} key={item.id} />;
          })} */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default previousmood;
