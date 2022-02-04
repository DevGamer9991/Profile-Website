import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import CardItem from './CardItem';

import CSharp from "./cards/CSharp.svg";
import CSS from "./cards/CSS.svg";
import HTML from "./cards/HTML.svg";
import Java from "./cards/Java.svg";
import JS from "./cards/JS.svg";
import Lua from "./cards/Lua.svg";
import NodeJS from "./cards/NodeJS.svg";
import Python from "./cards/Python.svg";
import ReactImage from "./cards/React.svg";
import MariaDB from "./cards/MariaDB.svg";

const Main = styled.div`
    background: var(--primary);
    height: 700px;
    position: relative;
`;

const Title = styled.h1`
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 40px;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    transform: translateY(35px);

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

const ProgramingCards = () => {
    return (
        <Main id="my-languages">
            <Title>The Languages I Know</Title>
            <CardWrapper>
                <Card title="Frontend Web Development">
                    <CardItem name="HTML" nameLocation="https://en.wikipedia.org/wiki/HTML" image={HTML} />
                    <CardItem name="CSS" nameLocation="https://en.wikipedia.org/wiki/CSS" image={CSS} />
                    <CardItem name="JS" nameLocation="https://www.javascript.com/" image={JS} />
                    <CardItem name="React" nameLocation="https://reactjs.org/" image={ReactImage} />
                </Card>

                <Card title="Backend And Databases">
                    <CardItem name="NodeJS" nameLocation="https://nodejs.org/" image={NodeJS} />
                    <CardItem name="MariaDB" nameLocation="" image={MariaDB} />
                </Card>

                <Card title="Other Languages">
                    <CardItem name="Python" nameLocation="https://www.python.org/" image={Python} />
                    <CardItem name="Lua" nameLocation="https://www.lua.org/" image={Lua} />
                    <CardItem name="Java" nameLocation="https://www.java.com/" image={Java} />
                    <CardItem name="CSharp" nameLocation="https://docs.microsoft.com/en-us/dotnet/csharp/" image={CSharp} />
                </Card>
            </CardWrapper>

        </Main>
    );
};

export default ProgramingCards;