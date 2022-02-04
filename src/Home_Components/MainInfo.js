import React from 'react';
import styled from 'styled-components';

import BlobBG from "../graphics/BlobBG.svg";

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: calc(100vh - 90px);
    position: relative;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        top: 90px;

        >img {
            display: none;
        }
    }
`;

const Blob = styled.img`
    width: 100%;
    max-width: 800px;
    position: absolute;
    top: 0;
    right: 0;
`;

const MainTextWrapper = styled.div`
    margin-left: 200px;
    max-width: 800px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transform: translateY(-90px);

    @media screen and (max-width: 500px) {
        margin: 0;
        width: 100vw;
        background: red;

        justify-content: center;
        align-items: center;
    }
`;

const MainText = styled.h1`
    font-size: 3vw;
    font-weight: normal;
    margin: 0;
    margin-bottom: 15px;
    /* background: red; */

    strong {
        font-size: 4vw;
        background: linear-gradient(to right, var(--primary), var(--secondary));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: 500px) {
        font-size: calc(65px / 2);

        strong {
            font-size: calc(75px / 2);
        }
    }
`;

const SecondaryText = styled.p`
    font-size: 1vw;
    margin: 0;
    margin-top: 10px;
    padding-left: 5px;

    /* background: red; */
    strong {
        color: var(--primary)
    }

    @media screen and (max-width: 500px) {
        font-size: calc(20px / 2);
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    transform: translateY(50px);
`;

const SolidButton = styled.a`
    background: var(--secondary);
    outline: 2px solid var(--secondary);
    width: 120px;
    height: 60px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    text-decoration: none;
    color: white;
    font-weight: bold;
    margin-right: 30px;

    :hover {
        background-color: var(--secondary-hover);
    }
`;

const LineButton = styled.a`
    /* background: var(--secondary); */
    outline: 2px solid var(--secondary);
    width: 120px;
    height: 60px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    text-decoration: none;
    color: black;
    font-weight: normal;

    :hover {
        background-color: var(--secondary-hover);
        color: white;
    }
`;

const MainInfo = () => {
    return (
        <Main>
            <MainTextWrapper>
                <MainText>Hi, My Name is <br></br><strong>Parker Thornton</strong></MainText>
                <SecondaryText>And I Am a Self Taught <strong>Programmer</strong> and <strong>Software Developer</strong></SecondaryText>
                <ButtonWrapper>
                    <SolidButton href="#about-me">About Me</SolidButton>
                    <LineButton href="/contact">Contact Me</LineButton>
                </ButtonWrapper>
            </MainTextWrapper>
            <Blob src={BlobBG} />
        </Main>
    );
};

export default MainInfo;