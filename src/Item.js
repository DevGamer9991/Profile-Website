import React, { useEffect } from "react";
import styled from "styled-components";

const Main = styled.div`
    height: 500px;
    display: flex;
    overflow: hidden;
    background: ${ props => props.background ? props.background : "transparent" };
    justify-content: center;

    @media screen and (max-width: 450px) {
        flex-direction: column;
    }
`;

const MainWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: ${ props => props.rightToLeft ? "row-reverse" : "row"};

    @media screen and (max-width: 450px) {
        justify-content: center;
    }
`;

const TextWrapper = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 450px) {
        flex-direction: column;
        width: 100%;
        margin-inline: 30px;
    }
`;

const ImageWrapper = styled.div`
    width: 50%;
    display: grid;
    place-items: center;
    position: relative;
    right: 0;
    top: 0;

    @media screen and (max-width: 450px) {
        display: none;
    }
`;

const Title = styled.h2`
    word-wrap: normal;
    font-size: 50px;
    text-align: left;
    color: ${ props => props.darkMode ? "white" : "black" };
    width: 500px;

    @media screen and (max-width: 450px) {
        width: 100%;

        text-align: center;

        margin-bottom: 30px;
    }
`;

const Desc = styled.p`
    word-wrap: normal; 
    font-size: 20px;
    color: ${ props => props.darkMode ? "white" : "black" };
    width: 500px;

    @media screen and (max-width: 450px) {
        width: 100%;
        padding-inline: 20px;
    }
`;

const Image = styled.img`
    height: 360px;
    filter: drop-shadow(0px 15px 15px rgba(0,0,0, 0.15));
`;

const TextImage = styled.h1`
    font-size: ${ props => props.imageTextSize ? props.imageTextSize : "140px" };
    text-align: left;
    color: ${ props => props.darkMode ? "white" : "black" };
`;

const Item = (props) => {
    return (
        <Main id={props.itemID} background={props.background}>
            <MainWrapper rightToLeft={props.rightToLeft}>
                <TextWrapper>
                    <Title darkMode={props.darkMode}>{props.title}</Title>
                    <Desc darkMode={props.darkMode}>{props.desc}</Desc>
                </TextWrapper>
                <ImageWrapper>
                    {/* <Image src={props.image} />     */}
                    <TextImage imageTextSize={props.imageTextSize} darkMode={props.darkMode}>{props.imageText}</TextImage>
                </ImageWrapper>
            </MainWrapper>
        </Main>
    )
}

export default Item;