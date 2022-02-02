import React from 'react';
import styled from "styled-components";

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

    justify-content: space-between;
    z-index: 10;
    background: white;
`;

export const LogoWrapper = styled.div`
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`;

export const LogoImg = styled.img`
    
`;

export const LogoLabel = styled.h1`
    margin-left: 10px;
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
`;

export const NavButton = styled.button`
    height: 45px;
    width: 120px;
    border-radius: 35px;
    border: none;
    outline: none;
    background: var(--primary);
    color: white;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;

    :hover {
        background-color: var(--primary-hover);
    }
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
            <LogoWrapper>
                <LogoImg src={Logo} width="60px"/>
                <LogoLabel>Thornton</LogoLabel>
            </LogoWrapper>
            <NavItemWrapper>
                <NavItem>About Me</NavItem>
                <NavItem>Test</NavItem>
                <NavItem>Test</NavItem>
                <NavItem>Test</NavItem>
                <NavItem>Test</NavItem>
                <NavButton>Contact Me</NavButton>
            </NavItemWrapper>
        </NavbarWrapper>
    );
};

export default Navbar;