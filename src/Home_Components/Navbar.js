import React from 'react';
import styled from "styled-components";
import { backgroundColor, mainTextColor, secondaryBackgroundColor } from '../config';

import Logo from "../graphics/Logo.svg";

// Navbar
export const NavbarWrapper = styled.header`
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-inline: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background: #2b2b2b9b;

    transition: all 0.25s ease-in-out;

    justify-content: space-between;
    z-index: 10;
`;

export const LogoWrapper = styled.div`
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    cursor: pointer;
`;

export const LogoImg = styled.img`
    
`;

export const LogoLabel = styled.h1`
    margin-left: 10px;
    color: ${mainTextColor};
`;

export const NavItemWrapper = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NavItem = styled.a`
    width: fit-content;
    font-size: 22px;
    margin-inline: 30px;
    cursor: pointer;

    color: ${mainTextColor};
    text-decoration: none;

    :hover, :focus {
        color: lightgrey;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const NavButton = styled.a`
    height: 45px;
    width: 120px;
    border-radius: 35px;
    border: none;
    outline: none;
    background: var(--primary);
    color: white;
    font-size: 17px;
    cursor: pointer;
    text-decoration: none;
    display: grid;
    place-items: center;

    :hover, :focus {
        background-color: var(--primary-hover);
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const HamburgerButton = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: fit-content;
        height: fit-content;

        margin-right: 20px;
    }
`;

const Line = styled.span`
    width: 30px;
    height: 4px;
    margin-top: 2px;
    margin-bottom: 3px;
    background-color: ${mainTextColor};
    color: transparent;
`;

const HamburgerMenu = styled.div`
    height: calc(100vh - 90px);
    width: 100vw;
    background: ${backgroundColor};
    position: absolute;
    top: 90px;
    left: -120%;
    right: 0;
    bottom: 0;

    transition: left 0.25s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MenuItem = styled.a`
    width: fit-content;
    margin-block: 20px;
    display: grid;
    text-align: center;
    text-decoration: none;
    color: ${mainTextColor};
    font-size: 30px;

    :hover, :focus {
        color: var(--secondary-hover);
    }
`;

export const MenuButton = styled.a`
    height: 50px;
    width: 80vw;
    border-radius: 35px;
    border: none;
    outline: none;
    background: var(--primary);
    color: white;
    font-size: 25px;
    cursor: pointer;
    text-decoration: none;
    display: grid;
    place-items: center;
    margin-block: 20px;

    :hover, :focus {
        background-color: var(--primary-hover);
    }
`;

const Navbar = () => {

    var hamMenu = React.createRef();
    var navbarWrapper = React.createRef();

    var hamShown = false;

    const clickLogo = () => {
        window.location.href = "/";
    }

    window.onscroll = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 12) {
            navbarWrapper.current.style.background = secondaryBackgroundColor;
        } else {
            navbarWrapper.current.style.background = "#2b2b2b9b";
        }
    };

    const openHamburgerMenu = () => {
        if (!hamShown) {
            hamMenu.current.style.left = "0";
            document.body.style.overflowY = "hidden";
            hamShown = true;
        } else {
            hamMenu.current.style.left = "-120%";
            document.body.style.overflowY = "scroll";
            hamShown = false;
        }
    }

    const MenuItemClick = () => {
        if (!hamShown) {
            hamMenu.current.style.left = "0";
            document.body.style.overflowY = "hidden";
            hamShown = true;
        } else {
            hamMenu.current.style.left = "-120%";
            document.body.style.overflowY = "scroll";
            hamShown = false;
        }
    }

    return (
        <NavbarWrapper ref={navbarWrapper}>
            <LogoWrapper onClick={clickLogo}>
                <LogoImg src={Logo} width="60px"/>
                <LogoLabel>Thornton</LogoLabel>
            </LogoWrapper>
            <NavItemWrapper>
                <NavItem href="/#my-languages">My Languages</NavItem>
                <NavItem href="/#about-me">About Me</NavItem>
                <NavButton href="/contact">Contact Me</NavButton>
                <HamburgerButton onClick={openHamburgerMenu}>
                    <Line>.</Line>
                    <Line>.</Line>
                    <Line>.</Line>
                </HamburgerButton>
            </NavItemWrapper>
            <HamburgerMenu ref={hamMenu}>
                <MenuItem onClick={MenuItemClick} href="#my-languages">My Languages</MenuItem>
                <MenuItem onClick={MenuItemClick} href="#about-me">About Me</MenuItem>
                <MenuButton href="/contact">Contact Me</MenuButton>
            </HamburgerMenu>
        </NavbarWrapper>
    );
};

export default Navbar;