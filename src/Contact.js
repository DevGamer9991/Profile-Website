import React, { useState } from 'react';
import styled from "styled-components";
import { mainTextColor } from './config';
import emailjs from '@emailjs/browser';

const MainContent = styled.div`
  position: absolute;
  top: 90px;
  padding: 0pc;
  margin: 0;
  width: 100vw;
  height: calc(100% - 90px);
  background: linear-gradient(to bottom right, var(--primary), var(--secondary));
  background-attachment: scroll;
  overflow-y: auto;
  position: fixed;
`;

const MainBox = styled.div`
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    max-width: 900px;
    /* max-height: 600px; */
    height: fit-content;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: 15px;
`;

const Title = styled.h1`
    text-align: center;
    padding: 0;
    margin: 0;
    margin-top: 10px;
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
    margin-block: 8px;
    font-size: 18px;
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
    height: 145px;  
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

const SubmitBox = styled.div`
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    max-width: 900px;
    max-height: 300px;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    display: none;
`;

const Contact = () => {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [subject, setSubject] = useState(null);
    const [message, setMessage] = useState(null);

    const mainBox = React.createRef();
    const submitBox = React.createRef();

    const swapBoxes = () => {
        mainBox.current.style.display = "none";
        submitBox.current.style.display = "block";
    }

    const submitForm = (event) => {
        event.preventDefault();

        emailjs.init("0f6cDHJ3MT0gemGUi");

        var templateParams = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            subject: subject,
            message: message
        };
         
        emailjs.send('service_20n1ezv', 'template_u8l0p92', templateParams)
        .then(function(response) {
            sessionStorage.setItem("submittedBox", "true")
            swapBoxes();
        }, function(error) {
            console.log('FAILED...', error);
        });
    }

    window.onload = () => {
        if (sessionStorage.getItem("submittedBox") === "true") {
            swapBoxes();
        }
    }

    return (
        <MainContent>
            <MainBox ref={mainBox}>
                <Title>Contact Me</Title>
                <ContactForm onSubmit={submitForm}>
                    <Label>First Name: </Label>
                    <NameInput type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} required/>
                    <Label>Last Name: </Label>
                    <NameInput type="text" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} required />
                    <Label>Email: </Label>
                    <NameInput type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                    <Label>Subject: </Label>
                    <SubjectBox type="text" placeholder='Subject' onChange={(e) => setSubject(e.target.value)} required/>
                    <Label>Message: </Label>
                    <MessageBox placeholder='Message' onChange={(e) => setMessage(e.target.value)} required/>
                    <SubmitButton type="submit" value="Send" />
                </ContactForm>
            </MainBox>

            <SubmitBox ref={submitBox}>
                Thank you for Contacting Me. I should reply within 48 hours. <br></br><br></br>
                Back to <a href='/'>Home</a>.
            </SubmitBox>
        </MainContent>
    );
};

export default Contact;