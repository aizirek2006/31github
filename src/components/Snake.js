import React from 'react';
import styled from 'styled-components';

const SnakeSegment = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
`;

const Snake = ({ snake }) => {
  return (
    <div>
      {snake.map((segment, index) => (
        <SnakeSegment key={index} style={{ left: `${segment.x}px`, top: `${segment.y}px` }} />
      ))}
    </div>
  );
};

export default Snake;
