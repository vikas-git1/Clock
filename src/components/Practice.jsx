import React, { useState, useEffect } from "react";

const Practice = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    let timeInterval = setInterval(() => {
      let currDate = new Date();
      let hr = currDate.getHours();
      let min = currDate.getMinutes();
      let sec = currDate.getSeconds();
      setTime({ hour: hr, minute: min, second: sec });
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);
  return (
    <div>
      <p>
        {time.hour.toString().padStart(2, "0")} :
        {time.minute.toString().padStart(2, "0")} :
        {time.second.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Practice;
