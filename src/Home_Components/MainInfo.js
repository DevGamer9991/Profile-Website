import React, { useState } from 'react';
import styled from 'styled-components';

import BlobBG from "../graphics/BlobBG.svg";

var Info = ["Programmer", "Developer", "IT Profesional"];

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: calc(100vh - 90px);
    position: relative;
`;

const Blob = styled.img`
    width: 44%;
    position: absolute;
    top: 0;
    right: 0;
`;

const MainTextWrapper = styled.div`
    margin-left: 200px;
    width: 800px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transform: translateY(-90px);
`;

const MainText = styled.h1`
    font-size: 65px;
    font-weight: normal;
    margin: 0;
    margin-bottom: 15px;
    /* background: red; */

    strong {
        font-size: 75px;
        background: linear-gradient(to right, var(--primary), var(--secondary));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const SecondaryText = styled.p`
    font-size: 20px;
    margin: 0;
    margin-top: 10px;
    padding-left: 5px;

    /* background: red; */
    strong {
        color: var(--primary)
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

    var value = Info[Math.floor(Math.random() * Info.length)];

    return (
        <Main>
            <MainTextWrapper>
                <MainText>Hi, My Name is <br></br><strong>Parker Thornton</strong></MainText>
                <SecondaryText>And I Am a Self Taught <strong>Programmer</strong> and <strong>Software Developer</strong></SecondaryText>
                <ButtonWrapper>
                    <SolidButton href="/contact">Contact Me</SolidButton>
                    <LineButton href="/test">Test</LineButton>
                </ButtonWrapper>
            </MainTextWrapper>
            <Blob src={BlobBG} />
        </Main>
    );
};

export default MainInfo;