import React from 'react';
import styled from "styled-components";
import {backgroundColor} from "../styles/cosnts";

export const Arrow = ({text, side, onClick}) => {
    return (
        <Button
            side={side}
            onClick={onClick}
        >
            <Name>{text}</Name>
        </Button>
    );
};

const Name = styled.p`
  font-weight: bold;
`;
const Button = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 2px;
  border:2px solid white;
  background: ${backgroundColor};
  transform: perspective(10em) ${props => props.side === 'right' ? 'rotateY(-20deg)' : 'rotateY(20deg)'};
  display: flex;
  justify-content: center;
  color: white;
  &:hover{
    background: white;
    color: ${backgroundColor};
  }
  ${Name} {
    transform: perspective(10em) ${props => props.side === 'left' ? 'rotateY(20deg)': 'rotateY(-20deg)'};
  }
`;