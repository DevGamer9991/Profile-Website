import React from 'react';
import styled from "styled-components";
import { mainTextColor } from '../config';

const Main = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 300px;
`;

const Title = styled.h1`
    color: ${mainTextColor};
`;

const Copywrite = styled.p`
    color: #858585;
`;

const Footer = () => {
    return (
        <Main>
            <Title>Parker Thornton</Title>
            <Copywrite>© {new Date().getFullYear()} Parker Thornton | All Rights Reserved</Copywrite>
        </Main>
    );
};

export default Footer;