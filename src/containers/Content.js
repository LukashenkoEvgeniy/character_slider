import React from 'react';
import styled from "styled-components";

import {Arrow} from "../components/Arrow";
import Slider from "./Slider";

import img from "../assets/with_cap.png";
import img2 from "../assets/boy copy.png";

export default class Content extends React.Component {

    state = {
        items: [
            {
                id: 1,
                imageUrl: img2
            }, {
                id: 2,
                imageUrl: img
            }, {
                id: 3,
                imageUrl: img
            },
        ]
    };

    slideRight(array) {
        let lastElement = array[array.length - 1];
        for (let index = array.length - 2; index >= 0; index--) {
            array[index + 1] = array [index];
        }
        array[0] = lastElement;
        return array;
    }

    slideLeft(array) {
        let firstElement = array[0];
        for (let index = 1; index <= array.length - 1; index++) {
            array[index - 1] = array [index];
        }
        array[array.length - 1] = firstElement;
        return array;
    }

    render() {
        const {items} = this.state;
        return (
            <Block>
                <Arrow
                    onClick={() => this.setState({items: this.slideLeft(this.state.items)})}
                    side={'left'}
                    text={'< НАЗАД'}
                />
                <Slider
                    data={items}
                />
                <Arrow
                    onClick={() => this.setState({items: this.slideRight(this.state.items)})}

                    side={'right'}
                    text={'ДАЛI >'}
                />
            </Block>
        );
    }
    ;
};

const Block = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 50px 0 50px ;
   @media(max-width: 590px) {
        height: 100%;
        margin: 5px;

    }
`;
