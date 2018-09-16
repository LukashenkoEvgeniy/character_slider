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

const SliderPosed = posed.div({
    flip: {
        scale: 1,
        transition: {
            scale: {
                type: 'spring',
                velocity: 5
            },
            default: {
                type: 'spring'
            }
        }
    }
});

const StyledSlider = styled(SliderPosed)`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 1024px) {
        flex-direction: column;
    }
`;