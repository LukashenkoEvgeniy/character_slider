import React from "react";
import styled from "styled-components";
import posed, {PoseGroup} from 'react-pose';
import {ImageCharacter} from "../components/ImageCharacter";

export default class Slider extends React.Component {

    render() {
        const {data} = this.props;
        return (
            <StyledSlider>
                <PoseGroup>
                    {data.map(({id, imageUrl}) =>
                        <SliderPosed key={id}>
                            <ImageCharacter
                                image={imageUrl}
                            />
                        </SliderPosed>
                    )}
                </PoseGroup>
            </StyledSlider>
        )
    }
}

const SliderPosed = posed.div({});

const StyledSlider = styled(SliderPosed)`
    width: 80%;
    display: flex;
    justify-content: center;
`;