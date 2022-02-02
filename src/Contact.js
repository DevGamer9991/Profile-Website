import React from 'react';
import styled from "styled-components";

const MainContent = styled.div`
  position: absolute;
  top: 90px;
  padding: 0pc;
  margin: 0;
  width: 100vw;
  height: calc(100vh - 90px);
  background: linear-gradient(to bottom right, var(--primary), var(--secondary));
`;

const MainBox = styled.div`
    width: 100%;
    height: 100%;
    max-width: 900px;
    max-height: 600px;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Title = styled.h1`
    text-align: center;
`;

const Contact = () => {
    return (
        <MainContent>
            <MainBox>
                <Title>Contact Me</Title>
            </MainBox>
        </MainContent>
    );
};

export default Contact;