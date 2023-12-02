import React from "react";
import Button from "../../UI/Button";
import { ReactComponent as PluseIcon } from "../../../assets/icon/plus-icon.svg.svg";
import styled from "styled-components";
import { useContext, useState } from "react";
import { BasketContext } from "../../../store/BasketContext";

const MealItemForm = ({ id, title, price }) => {
  const context = useContext(BasketContext);
  const [amount, setAmount] = useState(1);
  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };

  const orderFoodHandler = async (order) => {
    const response = await fetch(
      "https://orderfood-a47a4-default-rtdb.asia-southeast1.firebasedatabase.app/orderfood.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );
    const result = await response.json();
    console.log(result);
  };
  const orderFoodGet = async () => {
    const response = await fetch(
      "https://orderfood-a47a4-default-rtdb.asia-southeast1.firebasedatabase.app/orderfood.json"
    );
    const result = await response.json();
    for (let i in result) {
      const getOrderbasket = {
        id: result[i].id,
        title: result[i].title,
        amount: result[i].amount,
      };
      context.addToBasket(getOrderbasket);
    }
  };

  const onSumbitHandlar = (event) => {
    event.preventDefault();
    const basket = {
      id,
      title,
      price,
      amount,
    };
    orderFoodHandler(basket);
    orderFoodGet();
  };
  return (
    <StyledForm onSubmit={onSumbitHandlar}>
      <Container>
        <label htmlFor={id}>Amount</label>
        <input
          onChange={amountChangeHandler}
          type="number"
          id={id}
          value={amount}
          min={1}
          max={5}
          // defaultValue={1}
        />
      </Container>
      <Button>
        <StyledIcon />
        Add
      </Button>
    </StyledForm>
  );
};

export default MealItemForm;

const StyledIcon = styled(PluseIcon)`
  margin-right: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Container = styled.div`
  margin-bottom: 12px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-right: 20px;
  }
  input {
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    outline: none;
    padding: 4px 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;
