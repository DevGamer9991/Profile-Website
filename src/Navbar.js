import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Main = styled.div`
    background-color: transparent;
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

    @media screen and (max-width: 450px) {
        font-size: 24px;
    }
`;

const ItemsWrapper = styled.div`
    width: fit-content;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 450px) {
        display: none;
    }
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

const Hamburger = styled.div`
    display: none;
    @media screen and (max-width: 450px) {
        display: flex;
    }
`;

const HamburgerMenu = styled.div`
    display: flex;
    position: absolute;
    background-color: rgba(0,0,0,0.4);
    width: 100vw;
    height: 100vh;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;

    transition: all 0.25s ease-in-out;

    transform: ${props => props.navbarState ? "translateX(0%)" : "translateX(-100%)"};
`;

const Navbar = () => {

    const MainRef = useRef();

    const [navbarOpen, setNavbarOpen] = useState(false);

    window.onscroll = () => {
        if (window.scrollY >= 100) {
            MainRef.current.style.background = "rgba(0,0,0,0.5)"
        } else {
            MainRef.current.style.background = "transparent"
        }
    }

    const ToggleMenu = () => {
        if (navbarOpen) {
            setNavbarOpen(false)
        } else {
            setNavbarOpen(true)
        }
    }

    return (
        <Main ref={MainRef}>
            <Wrapper>
                <Title>PARKER THORNTON</Title>
                <ItemsWrapper>
                    <Item href="#home">HOME</Item>
                    <Item href="#projects">PROJECTS</Item>
                    <Item href="#contact">CONTACT</Item>
                </ItemsWrapper>
                <Hamburger onClick={ToggleMenu}><FontAwesomeIcon color="white" fontSize={30} icon={faBars} /></Hamburger>
            </Wrapper>
            <HamburgerMenu navbarState={navbarOpen}>
                <h1>Hi</h1>
            </HamburgerMenu>
        </Main>
    )
}

export default Navbar;