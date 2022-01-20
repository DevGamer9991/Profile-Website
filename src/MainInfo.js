import React from 'react';
import styled from 'styled-components';

import BlobBG from "./graphics/BlobBG.svg";

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
    font-size: 60px;
    font-weight: normal;

    strong {
        font-size: 65px;
        background: linear-gradient(to right, var(--primary), var(--secondary));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const SecondaryText = styled.p`
    strong {
        color: var(--primary)
    }
`;

const Blinker = styled.div`
    width: 2px;
    height: 10px;
    background: red;
`;

const MainInfo = () => {
    return (
        <Main>
            <MainTextWrapper>
                <MainText>Hi, My Name is <br></br> <strong>Parker Thornton</strong></MainText>
                <SecondaryText>And I Am a <br></br><strong>Programmer</strong></SecondaryText><Blinker />
            </MainTextWrapper>
            <Blob src={BlobBG} />
        </Main>
    );
};

export default MainInfo;