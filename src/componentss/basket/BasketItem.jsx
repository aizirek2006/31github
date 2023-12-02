import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../UI/Button";

const BasketItem = ({ amount, price, title }) => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      <Content>
        <PriceContainer>
          <StyledPrice>{price}$</StyledPrice>
          <StyledAmount>{amount}x</StyledAmount>
        </PriceContainer>
        <CounterContainer>
          <Button
            variant="contained"
            borderStyle="rounded"
            onClick={handleDecrease}
          >
            -
          </Button>
          <StyledCount>{count}</StyledCount>
          <Button
            variant="contained"
            borderStyle="rounded"
            onClick={handleIncrease}
          >
            +
          </Button>
        </CounterContainer>
      </Content>
    </Container>
  );
};

BasketItem.propTypes = {
  amount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default BasketItem;

const Container = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid black;
  width: 100%;
  margin-bottom: 30px;
`;

const StyledTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 0 0 12px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 153px;
  margin: 0;
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const StyledPrice = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
`;

const StyledAmount = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  padding: 6px 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: block;
  color: #222222;
  margin: 0;
`;

const StyledCount = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`;
