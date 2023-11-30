import React from 'react';
import styled from 'styled-components';

const FoodItem = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  position: absolute;
`;

const Food = ({ food }) => {
  return <FoodItem style={{ left: `${food.x}px`, top: `${food.y}px` }} />;
};

export default Food;
