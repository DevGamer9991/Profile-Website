import React from "react";
import styled from "styled-components";

const Main = styled.div`
    height: 450px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    display: flex;
    background: ${ props => props.background ? props.background : "transparent" };
    flex-direction: ${ props => props.rightToLeft ? "row-reverse" : "row"};
`;

const TextWrapper = styled.div`
    width: 50vw;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    padding-left: 200px;
`;

const ImageWrapper = styled.div`
    width: 50vw;
    display: grid;
    place-items: center;
    position: relative;
    right: 0;
    top: 0;
`;

const Title = styled.h2`
    word-wrap: normal;
    font-size: 50px;
    color: ${ props => props.darkMode ? "white" : "black" };
`;

const Desc = styled.p`
    word-wrap: normal; 
    color: ${ props => props.darkMode ? "white" : "black" };
`;

const Image = styled.img`
    height: calc(450px * 0.8);
`;

const Item = (props) => {
    return (
        <Main background={props.background} rightToLeft={props.rightToLeft}>
            <TextWrapper>
                <Title darkMode={props.darkMode}>{props.title}</Title>
                <Desc darkMode={props.darkMode}>{props.desc}</Desc>
            </TextWrapper>
            <ImageWrapper>
                <Image src={props.image} />    
            </ImageWrapper>

        </Main>
    )
}

export default Item;