import React from "react";
import styled from "styled-components";
import { mainTextColor, backgroundColor, secondaryBackgroundColor } from "../../config";

const Main = styled.div`
    width: 400px;
    height: 500px;
    /* background: #EDEDED; */
    background-color: ${backgroundColor};
    color: ${mainTextColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    box-shadow: 5px 5px 10px rgba(100, 100, 100, 50%);
    transition: all 0.25s ease-in-out;

    :hover, :focus {
        background: ${secondaryBackgroundColor};
        box-shadow: 10px 10px 10px rgba(100, 100, 100, 50%);
        transform: translate(0px, -5px);
    }

    @media screen and (max-width: 500px) {
        height: 300px;
        width: 100%;
        border-radius: 0;

        :hover, :focus {
            background: #EDEDED;
            box-shadow: 5px 5px 10px rgba(100, 100, 100, 50%);
            transform: translate(0px);
        }

        div {

            img {
                width: 30px;
            }

            a {
                font-size: 16px;
            }
        }
    }
`;

const Title = styled.h2``;

const List = styled.div`
`;

const Card = (props) => {
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