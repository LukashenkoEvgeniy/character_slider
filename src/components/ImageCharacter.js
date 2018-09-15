import React from "react";
import styled from "styled-components";
import posed from "react-pose"

import img from "../assets/with_cap.png";

export const ImageCharacter = () => {
    return (
        <ImageBlock>
            <Circle>
                <StyledImage src={img}/>
            </Circle>
        </ImageBlock>
    );

};



const Image = posed.img({
    hoverable: true,
    init: {
        scale: 1.0,
        bottom: '0px',

    },
    hover: {
        bottom: '10px',
        scale: 1.1,
    }
});

const StyledImage = styled(Image)` 
    position: relative;
    height: 200px;
    width: 194px;
`;
const ImageBlock = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
`;
const Circle = styled.div`
   border: 3px solid rgb(255,255,255, 0.7);
   width: 100%;
   height: 100%;
   border-radius: 200px;
   display: flex;
   justify-content: center;
`;