import React from "react";

function PreviousMoodCard({ result, createdAt }) {
  const createdAtTime = new Date(createdAt);
  const currentTime = new Date();
  const diff = currentTime - createdAtTime;
  const diffInMinutes = diff / 1000 / 60;
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = Math.floor(diffInMinutes % 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  console.log(days, weeks);

  return (
    <div className="mt-[8px] border-t-[0.1px] shadow-md flex justify-between py-4 px-4 items-center rounded-[10px]">
      <span className="text-sm font-semibold flex items-center">
        {" "}
        <span className="text-3xl pr-4">{result.emoji}</span>
        {result.mood}
      </span>
      {weeks > 0 ? (
        <p className="text-sm text-gray-500">
          {weeks} Week{weeks < 2 ? "" : "s"} Ago
        </p>
      ) : days > 0 ? (
        <p className="text-sm text-gray-500">
          {days} Day{days < 2 ? "" : "s"} Ago
        </p>
      ) : hours > 0 ? (
        <p className="text-sm text-gray-500">
          {hours} Hour{hours < 2 ? "" : "s"} Ago
        </p>
      ) : (
        <p className="text-sm text-gray-500">
          {minutes} Minute{minutes < 2 ? "" : "s"} Ago
        </p>
      )}
    </div>
  );
}

export default PreviousMoodCard;
