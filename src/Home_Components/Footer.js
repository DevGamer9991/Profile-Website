import React from 'react';
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 300px;
`;

const Footer = () => {
    return (
        <Main>
            <h3>Parker Thornton</h3>
            <div>
                Test
            </div>
        </Main>
    );
};

export default Footer;