import React from "react";
import styled from "styled-components";

export default class Slider extends React.Component {

    render() {
        return (
            <SliderContent>
                {this.props.children}
            </SliderContent>
        )
    }
}

const SliderContent = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
`;