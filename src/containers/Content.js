import React from 'react';
import styled from "styled-components";

import {Arrow} from "../components/Arrow";
import Slider from "./Slider";
import {ImageCharacter} from "../components/ImageCharacter";

export const Content = () => {
    return (
        <Block>
            <Arrow
                side={'left'}
                text={'< НАЗАД'}
            />
            <Slider>
                <ImageCharacter></ImageCharacter>
                <ImageCharacter></ImageCharacter>
                <ImageCharacter></ImageCharacter>

            </Slider>
            <Arrow
                side={'right'}
                text={'ДАЛI >'}
            />
        </Block>
    );
};

const Block = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 50px 0 50px ;
`;
