import React from 'react';
import styled from "styled-components";
import { mainTextColor } from '../config';

const Main = styled.div`
    padding: 10px;
`;

const Title = styled.h1`
    color: ${mainTextColor};
`;

const Subtext = styled.p`
    color: ${mainTextColor};
`;

const AboutMe = () => {
    return (
        <Main id="about-me">
            <Title>About Me</Title>
            <Subtext>Hi, My name is Parker Thornton and I am a self taught programmer and software developer. I grew up in Oklahoma City, OK with my parents and my younger brother. I am also a part of a high school cyber security team at Oklahoma Christian University.</Subtext>
        </Main>
    );
};

export default AboutMe;