import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

const Main = styled.div`
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
    height: 70px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
    max-width: 1000px;
    flex-wrap: wrap;
`;

const Name = styled.h2`
    margin-left: 10px;
    color: white;
`;

const Item = styled.a`
    width: 230px;
    height: 60px;
    background: rgba(73,204,60,1);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 10px;

    text-decoration: none;

    transition: all 0.25s ease-in-out;
    cursor: pointer;

    :hover {
        background: rgba(86,252,70,1);
        transform: scale(1.025);
    }
`;

const ContactMe = () => {
    return (
        <Main id="contact">
            <Title>Ways to Contact Me.</Title>
            <Wrapper>
                <Item href="https://discordapp.com/users/738860824470356019">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faDiscord} />
                    <Name>Dev{"{Gamer}"}</Name>
                </Item>
                <Item href="https://www.instagram.com/pathornton114/">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faInstagram} />
                    <Name>Pathornton114</Name>
                </Item>
                <Item href="https://www.facebook.com/pathornton114/">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faFacebook} />
                    <Name>Pathornton114</Name>
                </Item>
                <Item href="https://www.youtube.com/channel/UCUnqPRAstzTqxvgUSks52aA">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faYoutube} />
                    <Name>Dev{"{Gamer}"}</Name>
                </Item>
                <Item href="mailto: pathornton114@gmail.com">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faInbox} />
                    <Name style={{ fontSize: "14px" }}>pathornton114@gmail.com</Name>
                </Item>
            </Wrapper>
        </Main>
    )
}

export default ContactMe;