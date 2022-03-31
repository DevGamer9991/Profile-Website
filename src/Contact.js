import React from 'react';
import styled from "styled-components";
import { mainTextColor } from './config';

const MainContent = styled.div`
  position: absolute;
  top: 90px;
  padding: 0pc;
  margin: 0;
  width: 100vw;
  height: calc(100vh - 90px);
  background: linear-gradient(to bottom right, var(--primary), var(--secondary));
`;

const MainBox = styled.div`
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    max-width: 900px;
    max-height: 600px;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Title = styled.h1`
    text-align: center;
`;

const ContactForm = styled.form`
    width: 90%;
    margin-left: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Label = styled.label`
    margin-block: 10px;
    font-size: 20px;
`;

const NameInput = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    background-color: whitesmoke;
    width: 100%;
    height: 30px;
`;

const SubjectBox = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    background-color: whitesmoke;
    height: 30px;
    font-weight: 400;
`;

const MessageBox = styled.textarea`
    resize: none;
    border: 1px solid black;
    border-radius: 5px;
    background-color: whitesmoke;
    height: 165px;
`;

const SubmitButton = styled.input`
    width: 150px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: var(--secondary);
    margin-top: 10px;
    position: relative;
    left: 100%;
    transform: translateX(-100%);
    color: ${mainTextColor};

    :focus, :hover {
        background-color: var(--secondary-hover);
    }
`;

const Contact = () => {
    return (
        <MainContent>
            <MainBox>
                <Title>Contact Me</Title>
                <ContactForm>
                    <Label>First Name: </Label>
                    <NameInput type="text" placeholder='First Name' required/>
                    <Label>Last Name: </Label>
                    <NameInput type="text" placeholder='Last Name' required />
                    <Label>Subject: </Label>
                    <SubjectBox type="text" placeholder='Subject' required/>
                    <Label>Message: </Label>
                    <MessageBox placeholder='Message' required/>
                    <SubmitButton type="submit" value="Send" />
                </ContactForm>
            </MainBox>
        </MainContent>
    );
};

export default Contact;