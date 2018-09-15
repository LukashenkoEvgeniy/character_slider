import React from "react";
import styled from "styled-components";
import posed from "react-pose"

export default class Slider extends React.Component {

    render() {
        return (
            <StyledSlider>
                {this.props.children}
            </StyledSlider>
        )
    }
}



const SliderPosed = posed.div({
    draggable: 'x',
    dragBounds: { left: '-100%', right: '100%' }
});

const StyledSlider = styled(SliderPosed)`
    width: 80%;
    display: flex;
    justify-content: center;
`;