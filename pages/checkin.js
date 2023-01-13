import React, { useState } from "react";
import {
  Bars3Icon,
  UserCircleIcon,
  HomeIcon,
  FaceSmileIcon,
  DeviceTabletIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import CheckinPage1 from "../components/CheckinPage1";
import CheckinPage0 from "../components/CheckinPage0";
import CheckinPage2 from "../components/CheckinPage2";
import CheckinPage3 from "../components/CheckinPage3";
import CheckinPage4 from "../components/CheckinPage4";
import { api } from "../components/Api";
import checkMood from "../components/MoodChecker";
import CheckinPage5 from "../components/CheckinPage5";

function checkin() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answer_1, setAnswer1] = useState("");
  const [answer_2, setAnswer2] = useState("");
  const [answer_3, setAnswer3] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [wristTemp, setWristTemp] = useState("");

  // const question_1 = "Is there any event affecting your mood today?";
  // const question_2 = "How does this event affect your thoughts and behavior?";
  // const question_3 = "Mood Scale";
  const user_id = 1;

  let questionValue = [answer_1, answer_2, answer_3];
  let vitalValue = [heartRate, wristTemp];
  const mood = checkMood(questionValue, vitalValue);
  let emoji;
  function checkEmoji(mood) {
    if (mood == "Angry") {
      return (emoji = "😡");
    }
    if (mood == "Frustrated") {
      return (emoji = "😣");
    }
    if (mood == "Sad") {
      return (emoji = "😢");
    }
    if (mood == "Anxious") {
      return (emoji = "😰");
    }
    if (mood == "Neutral") {
      return (emoji = "😶");
    }
    if (mood == "Okay") {
      return (emoji = "🙂");
    }
    if (mood == "Pleased") {
      return (emoji = "😊");
    }
    if (mood == "Happy") {
      return (emoji = "😁");
    }
    if (mood == "Optimistic") {
      return (emoji = "🤩");
    }
    if (mood == "Excited") {
      return (emoji = "😆");
    }
  }
  checkEmoji(mood);
  console.log(mood, emoji);

  function nextPage(e) {
    setCurrentPage(currentPage + 1);
  }

  function previousPage(e) {
    setCurrentPage(currentPage - 1);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await Promise.all([
      fetch(api + "/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id,
          answer_1,
          answer_2,
          answer_3
        }),
      }),

      fetch(api + "/vitals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id,
          heart_rate: heartRate,
          wrist_temperature: wristTemp,
        }),
      }),

      fetch(api + "/results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id,
          emoji,
          mood,
        }),
      }),
    ]);
    nextPage();
  }

  return (
    <div className="absolute" style={{ paddingTop: "env(safe-area-inset-top" }}>
      <div className="overflow-y-hidden overflow-x-hidden relative top-10">
        <div className="">
          {currentPage === 0 && <CheckinPage0 nextPage={nextPage} />}

          <form onSubmit={handleSubmit}>
            {currentPage === 1 && (
              <CheckinPage1
                nextPage={nextPage}
                previousPage={previousPage}
                answer1={answer_1}
                setAnswer1={setAnswer1}
              />
            )}
            {currentPage === 2 && (
              <CheckinPage2
                nextPage={nextPage}
                previousPage={previousPage}
                setAnswer2={setAnswer2}
                answer2={answer_2}
              />
            )}
            {currentPage === 3 && (
              <CheckinPage3
                nextPage={nextPage}
                previousPage={previousPage}
                answer3={answer_3}
                setAnswer3={setAnswer3}
              />
            )}
            {currentPage === 4 && (
              <CheckinPage4
                nextPage={nextPage}
                previousPage={previousPage}
                setHeartRate={setHeartRate}
                setWristTemp={setWristTemp}
                heartRate={heartRate}
                wristTemp={wristTemp}
              />
            )}
          </form>
          {currentPage === 5 && (
            <CheckinPage5
              nextPage={nextPage}
              previousPage={previousPage}
              mood={mood}
              emoji={emoji}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default checkin;
