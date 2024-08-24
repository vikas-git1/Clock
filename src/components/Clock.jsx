import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateClock = setInterval(() => {
      const currDate = new Date();
      let hours = currDate.getHours();
      const minutes = currDate.getMinutes();
      const seconds = currDate.getSeconds();

      setTime({
        hour: hours,
        minute: minutes,
        seconds: seconds,
      });
    }, 1000);

    return () => clearInterval(updateClock);
  }, []);

  //   const hour12Format = time.hour % 12 || 12; // Convert to 12-hour format
  const period = time.hour >= 12 ? "PM" : "AM"; // Determine AM/PM

  return (
    <div>
      <p>
        {/* {hour12Format.toString().padStart(2, "0")} :{" "} */}
        {time.hour.toString().padStart(2, "0")} :{" "}
        {time.minute.toString().padStart(2, "0")} :{" "}
        {time.seconds.toString().padStart(2, "0")} {period}
      </p>
    </div>
  );
};

export default Clock;
