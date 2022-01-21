import React, { useState } from 'react';
import styled from 'styled-components';

import BlobBG from "./graphics/BlobBG.svg";

var Info = ["Programmer", "Developer", "IT Profesional"];

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Blob = styled.img`
    width: 44rem;
`;

const MainTextWrapper = styled.div`
    margin-left: 200px;
    width: 800px;
    display: flex;
    justify-content: center;
    flex-direction: column;
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

const MainInfo = () => {

    var value = Info[Math.floor(Math.random() * Info.length)];

    return (
        <Main>
            <MainTextWrapper>
                <MainText>Hi, My Name is <br></br><strong>Parker Thornton</strong></MainText>
                <SecondaryText>And I Am a Self Taught <strong>Programmer</strong> and <strong>Software Developer</strong></SecondaryText>
            </MainTextWrapper>
            <Blob src={BlobBG} />
        </Main>
    );
};

export default MainInfo;