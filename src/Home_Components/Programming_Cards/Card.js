import React from "react";
import styled from "styled-components";

const Main = styled.div`
    width: 400px;
    height: 500px;
    background: #EDEDED;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    box-shadow: 5px 5px 10px rgba(100, 100, 100, 50%);
    transition: all 0.25s ease-in-out;

    :hover {
        background: white;
        box-shadow: 10px 10px 10px rgba(100, 100, 100, 50%);
        transform: translate(0px, -5px);
    }
`;

const Title = styled.h2``;

const List = styled.div`
`;

const Test = styled.p`color: black;`;

const Card = (props) => {
    var list = props.list;

    return (
        <Main>
            <Title>{props.title}</Title>
            <List>
                {props.children}
            </List>
        </Main>
    )
}

export default Card;