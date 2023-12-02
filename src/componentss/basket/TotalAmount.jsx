import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
const TotalAmount = ({ isModalHandler, price }) => {
  return (
    <div>
      <StyledTitleContainer>
        <StyledTitle>Total Amount</StyledTitle>
        <StyledPrice>{price.toFixed(2)}$</StyledPrice>
      </StyledTitleContainer>
      <ActionsButtonContainer>
        <Button onClick={isModalHandler} variant="contained">
          Close
        </Button>
        {price > 0 && <Button>order</Button>}
      </ActionsButtonContainer>
    </div>
  );
};

export default TotalAmount;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;
const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
`;
const StyledPrice = styled.p`
  font-weight: 600;
  font-size: 22px;
  align-items: center;
  line-height: 33px;
  color: #8a2b05;
`;
const ActionsButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 1rem;
`;
