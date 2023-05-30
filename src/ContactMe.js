import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin, faTwitch, faTwitter, faInstagram, faFacebook, faYoutube, faGithub, faGit } from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

const Main = styled.div`
    min-height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 30px;
    padding-top: 30px;
`;

const Title = styled.h1`
    height: 70px;
    font-size: xxx-large;

    text-align: center;

    @media screen and (max-width: 450px) {
        font-size: 40px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

const Tag = styled.h2`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 32px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1000px;
    flex-wrap: wrap;
`;

const Name = styled.h2`
    margin-left: 10px;
    font-size: 20px;
    color: white;
`;

const Item = styled.a`
    width: 230px;
    height: 60px;
    /* background: rgba(73,204,60,1); */
    background: rgba(63,180,251,1);
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
            <Title>Ways to Contact Me</Title>
            <Tag>Primary Contacts:</Tag>
            <Wrapper>
                <Item href="https://discordapp.com/users/738860824470356019">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faDiscord} />
                    <Name>Dev{"{Gamer}"}</Name>
                </Item>
                <Item href="mailto: dgamer9991@gmail.com">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faInbox} />
                    <Name style={{ fontSize: "13px" }}>dgamer9991@gmail.com</Name>
                </Item>
                <Item href="https://twitter.com/devgamer9991">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faTwitter} />
                    <Name>@DevGamer9991</Name>
                </Item>
            </Wrapper>
            <Tag>Other Contacts:</Tag>
            <Wrapper>
                <Item href="https://github.com/DevGamer9991">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faGithub} />
                    <Name>DevGamer9991</Name>
                </Item>
                <Item href="https://www.instagram.com/pathornton114/">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faInstagram} />
                    <Name>Pathornton114</Name>
                </Item>
                <Item href="https://www.facebook.com/pathornton114/">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faFacebook} />
                    <Name>Pathornton114</Name>
                </Item>
                <Item href="https://www.youtube.com/@pathornton114">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faYoutube} />
                    <Name>Parker Thornton</Name>
                </Item>

                <Item href="https://www.linkedin.com/in/parker-thornton114/">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faLinkedin} />
                    <Name>Parker Thornton</Name>
                </Item>
                
                <Item href="https://www.twitch.tv/devgamer9991">
                    <FontAwesomeIcon color="white" fontSize={25} icon={faTwitch} />
                    <Name>DevGamer9991</Name>
                </Item>
            </Wrapper>
        </Main>
    )
}

export default ContactMe;