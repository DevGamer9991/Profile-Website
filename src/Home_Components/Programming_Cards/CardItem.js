import React from 'react';
import styled from 'styled-components';
import { mainTextColor } from '../../config';

const Main = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-block: 5px;
`;

const Image = styled.img`
    width: 60px;
    height: 100%;
    margin-right: 5px;
`;

const Name = styled.a`
    font-size: 24px;
    color: ${mainTextColor};
    text-decoration: none;
`;

const CardItem = (props) => {
    return (
        <Main>
            <Image src={props.image} />
            <Name href={props.nameLocation}>{props.name}</Name>
        </Main>
    );
};

export default CardItem;