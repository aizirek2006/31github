import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, id, variant, borderStyle }) => {
  return (
    <StyledButton
      borderStyle={borderStyle}
      variant={variant}
      onClick={onClick}
      id={id}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const getBackgroundColor = (props) => {
  return props.variant === "contained" ? "#fff" : "#8a2b06";
};
const getColor = (props) => {
  return props.variant === "contained" ? "#8a2b06" : "#fff";
};
const getRadius = (props) => {
  return props.borderStyle === "rounded" ? "6px" : "20px";
};
const StyledButton = styled.button`
  cursor: pointer;
  font: inherit;
  background-color: ${getBackgroundColor};
  border: 1px solid #8a2b06;
  color: ${getColor};
  padding: 0.25rem 2rem;
  border-radius: ${getRadius};
  font-weight: bold;
  padding: 10px 24px;
  margin: 0;
  &:hover,
  :active {
    background-color: #641e03;
    border-color: #641e03;
    color: white;
  }
`;
