import React from "react";
import styled from "styled-components";

const Main = styled.div`
    background-color: ${ window.screenTop >= 0 ? "transparent" : "red" };
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    transition: all 0.25s ease-in-out;
`;

const Wrapper = styled.div`
    width: 90%;
    max-width: 1500px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

const Title = styled.h1`
    color: white;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: fit-content;
    margin-left: 0px;
    font-size: 30px;
`;

const ItemsWrapper = styled.div`
    width: fit-content;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
`;

const Item = styled.a`
    margin: 0;
    padding: 0;
    color: white;
    margin-left: 40px;
    font-size: 22px;
    cursor: pointer;
    text-decoration: none;

    transition: all 0.25s ease-in-out;

    :hover {
        color: lime;
    }
`;

const Navbar = () => {

    const MainRef = React.createRef();

    window.onscroll = () => {
        if (window.scrollY >= 100) {
            MainRef.current.style.background = "rgba(0,0,0,0.5)"
        } else {
            MainRef.current.style.background = "transparent"
        }
    }

    return (
        <Main ref={MainRef}>
            <Wrapper>
                <Title>PARKER THORNTON</Title>
                <ItemsWrapper>
                    <Item href="#home">HOME</Item>
                    <Item href="#contact">CONTACT</Item>
                </ItemsWrapper>
            </Wrapper>
        </Main>
    )
}

export default Navbar;