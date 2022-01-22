import React from 'react';
import styled from 'styled-components';

import Card from './Card';

import HTML from "./cards/html.svg";

const Main = styled.div`
    background: var(--primary);
    height: 600px;
`;

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    height: 100%;
    place-items: center;
`;

const ProgramingCards = () => {
    return (
        <Main>
            <CardWrapper>
                <Card image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" name="JS" />
                <Card image={HTML} name="HTML" />
                <Card name="CSS" />
                <Card name="React" />
                <Card name="NodeJS" />
                <Card name="Lua" />
                <Card name="Python" />
                <Card name="CSharp" />
            </CardWrapper>

        </Main>
    );
};

ProgramingCards.propTypes = {};

export default ProgramingCards;