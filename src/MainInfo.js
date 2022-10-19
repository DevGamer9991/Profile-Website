import React from "react";
import styled from "styled-components";

const Main = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    /* width: 100vw; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(to bottom right, rgba(0,87,101,1) 0%, rgba(9,121,118,1) 44%, rgba(0,255,132,1) 100%); */
    /* background: linear-gradient(121deg, rgba(252,70,107,1) 0%, rgba(101,81,173,1) 27%, rgba(63,94,251,1) 50%, rgba(101,81,173,1) 77%, rgba(252,70,107,1) 100%); */
    background: linear-gradient(to bottom right, rgba(86,252,70,1) 0%, rgba(42,163,158,1) 20%, rgba(63,180,251,1) 50%, rgba(42,163,158,1) 80%, rgba(86,252,70,1) 100%);
    z-index: 1;
`;

const Wrapper = styled.div`
    height: 100%;
    width: 50vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
`;

const Name = styled.h1`
    font-size: 60px;
    /* margin-bottom: 20px; */
    font-weight: 300;
    color: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const ImageWrapper = styled.div`
    width: 50vw;
    right: 0;
    display: grid;
    place-items: center;
    >img {
        width: calc(100vh * 0.5);
    }
`;

const MainInfo = (props) => {
    return (
        <Main>
            <Wrapper>
                <Name>My Name is <br /><span style={{ fontWeight: 900 }}>Parker Thornton</span></Name>
            </Wrapper>
            <ImageWrapper>
                <img src="images/computer.png"/>
            </ImageWrapper>
        </Main>
    )
}  

export default MainInfo;