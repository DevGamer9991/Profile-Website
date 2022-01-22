import React from "react";
import styled from "styled-components";

const Main = styled.div`
    width: 250px;
    height: 250px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`;

const Image = styled.img`
    width: 100px;
`;

const Card = (props) => {
    return (
        <Main>
            <Image src={props.image} />
            {props.name}
        </Main>
    )
}

export default Card;