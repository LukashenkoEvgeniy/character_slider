import React from "react";
import styled from "styled-components";
import posed from "react-pose"

export const ImageCharacter = ({image}) => {
    return (
        <ImageBlock>
            <Circle>
                <StyledImage src={image}/>
            </Circle>
        </ImageBlock>
    );
};

const Image = posed.img({
    hoverable: true,
    init: {
        scale: 1.0,
    },
    hover: {
        scale: 1.03,
        transaction: {type: "spring"}
    }
});

const StyledImage = styled(Image)` 
    bottom: 0px;
    position: relative;
    right: 5px;
    height: 100%;
    width: calc(100% - 6);
    &:hover{
      bottom: 3px
    }
    @media(max-width: 1024px) {
        right: 0;
     }
`;
const ImageBlock = styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    margin: 15px;
    @media(max-width: 1024px) {
      width: 100px;
      height: 100px;
      margin: 10px;
    }
`;
const Circle = styled.div`
   border: 3px solid aliceblue;
   width: 100%;
   height: 100%;
   border-radius: 200px;
   display: flex;
   justify-content: center;
`;