import React from "react";
import styled from "styled-components";
import BackgorundImg from "../../assets/img/samary-backg.jpg";
import SummaryCard from "./SummaryCard";
const Summary = () => {
  return (
    <Container>
      <StyledImg src={BackgorundImg} alt="" />
      <SummaryCard />
    </Container>
  );
};

export default Summary;
const Container = styled.div`
  height: 527px;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 432px;
  /* margin-top: 100px; */
`;
