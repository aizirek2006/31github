import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icon/BasketIcon.svg";
const BasketButton = ({ isModalHandler, count }) => {
  return (
    <div>
      <StyledButton onClick={isModalHandler}>
        <BasketIcon />
        <StyledSpan>Your cart</StyledSpan>
        <StyledCounter id="counter">{count || 0}</StyledCounter>
      </StyledButton>
    </div>
  );
};

export default BasketButton;

const StyledButton = styled.button`
  border-radius: 20px;
  padding: 12px 32px;
  margin-right: 220px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  background-color: #4a1703;
  cursor: pointer;
  &:hover {
    background-color: #611e03;
  }
  &:hover > #counter {
    background-color: #4d1702;
  }
`;

const StyledSpan = styled.span`
  margin-left: 12px;
  margin-right: 24px;
`;
const StyledCounter = styled.span`
  background-color: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: #ffffff;
  padding: 4px 20px;
`;
