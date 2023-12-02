import React, { useContext } from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";
import { BasketContext } from "../../store/BasketContext";
// const items = [
// 	{
// 		id: '1',
// 		title: 'Sushi',
// 		amount: '3',
// 		price: 22.99,
// 	},
// 	{
// 		id: '2',
// 		title: 'Schnitzel',
// 		amount: '3',
// 		price: 16.41,
// 	},
// 	{
// 		id: '3',
// 		title: 'Barbecue Burger',
// 		amount: '2',
// 		price: 12.99,
// 	},
// 	{
// 		id: '4',
// 		title: 'Green Bowl',
// 		amount: '4',
// 		price: 19.99,
// 	},
// ]
const Basket = ({ isModalHandler }) => {
  const { items } = useContext(BasketContext);
  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  };
  return (
    <Modal onClose={isModalHandler}>
      <StyledTotalContainer>
        <FixedHeightContainer>
          {items.map((item) => {
            return (
              <BasketItem
                key={item.id}
                title={item.title}
                price={item.price}
                amount={item.amount}
              />
            );
          })}
        </FixedHeightContainer>
        <TotalAmount price={getTotalPrice()} isModalHandler={isModalHandler} />
      </StyledTotalContainer>
    </Modal>
  );
};

export default Basket;
const StyledTotalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem, 1rem;
`;

const FixedHeightContainer = styled.div`
  max-height: 223px;
  overflow-y: scroll;
`;
