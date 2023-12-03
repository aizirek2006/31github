import React, { useState, useEffect } from "react";

function Clock() {
  // Initialize the current time to the current date and time
  const [time, setTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Extract the hours, minutes, and seconds from the current time
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Format the time as a string
  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <div>
      {/* Display the time string */}
      <h1>{timeString}</h1>
    </div>
  );
}

export default Clock;
