import React from "react";

function PreviousMoodCard({ result, createdAt }) {
  const createdAtTime = new Date(createdAt);
  const currentTime = new Date();
  const diff = currentTime - createdAtTime;
  const diffInMinutes = diff / 1000 / 60;
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = Math.floor(diffInMinutes % 60);

  return (
    <div className="mt-[8px] border-t-[0.1px] shadow-md flex justify-between py-4 px-4 items-center rounded-[10px]">
      <span className="text-sm font-semibold flex items-center">
        {" "}
        <span className="text-3xl pr-4">{result.emoji}</span>
        {result.mood}
      </span>
      {hours > 0 ? (
        <p className="text-sm text-gray-500">{hours} Hours Ago</p>
      ) : (
        <p className="text-sm text-gray-500">{minutes} minutes Ago</p>
      )}
    </div>
  );
}

export default PreviousMoodCard;
