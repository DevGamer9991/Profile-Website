import React from 'react';
import styled from "styled-components";

const Main = styled.div``;

const Title = styled.h1``;

const Subtext = styled.p``;

const AboutMe = () => {
    return (
        <Main id="about-me">
            <Title>About Me</Title>
            <Subtext>Hi, My name is Parker Thornton and I am a self taught programmer and software developer. I grew up in Oklahoma City, OK with my parents and my younger brother. I am also a part of a high school cyber security team at Oklahoma Christian University.</Subtext>
        </Main>
    );
};

export default AboutMe;