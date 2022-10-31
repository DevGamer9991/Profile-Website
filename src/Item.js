import React from "react";
import styled from "styled-components";

const Main = styled.div`
    height: 450px;
    display: flex;
    overflow: hidden;
    background: ${ props => props.background ? props.background : "transparent" };
    justify-content: center;
`;

const MainWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: ${ props => props.rightToLeft ? "row-reverse" : "row"};
`;

const TextWrapper = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ImageWrapper = styled.div`
    width: 50%;
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
    width: 360px;
`;

const Desc = styled.p`
    word-wrap: normal; 
    color: ${ props => props.darkMode ? "white" : "black" };
    width: 360px;
`;

const Image = styled.img`
    height: 360px;
    filter: drop-shadow(0px 15px 15px rgba(0,0,0, 0.15));
`;

const Item = (props) => {
    return (
        <Main background={props.background}>
            <MainWrapper rightToLeft={props.rightToLeft}>
                <TextWrapper>
                    <Title darkMode={props.darkMode}>{props.title}</Title>
                    <Desc darkMode={props.darkMode}>{props.desc}</Desc>
                </TextWrapper>
                <ImageWrapper>
                    <Image src={props.image} />    
                </ImageWrapper>
            </MainWrapper>
        </Main>
    )
}

export default Item;