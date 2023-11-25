import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <CenteredDiv>
      <StyleClock>
        <h3>Time</h3>
        <TimeStyle>
          <h1>{timeString}</h1>
        </TimeStyle>
      </StyleClock>
    </CenteredDiv>
  );
}

export default Clock;

const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const StyleClock = styled.div`
  text-align: center;
  background-color: #6262b3;
  width: 500px;
  height: 250px;
  border-radius: 50px;
`;

const TimeStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  h1 {
    font-size: 3em; 
    margin: 0; 
    margin-bottom: 150px;
  }
`;
