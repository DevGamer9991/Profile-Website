import React from "react";
import styled from "styled-components";

const Main = styled.div`
    height: 150px;
    display: flex;
    justify-content: space-between;
    padding-inline: 100px;
    align-items: center;
    background: #2c2c35;
`;

const Title = styled.h2`
    color: white;
`;

const Copywrite = styled.h2`
    color: rgba(173,181,189, 1);
    font-size: 14px;
`;

const Footer = (props) => {
    return (
        <Main>
            <Title>PARKER THORNTON</Title>
            <Copywrite>© 2022 Parker Thornton | All rights reserved</Copywrite>
        </Main>
    )
}

export default Footer;