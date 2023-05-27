import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.div`
    min-height: 375px;
    padding-top: 25px;
    padding-bottom: 50px;
    background-color: #212121;
    width: 100%;
    color: white;
    position: relative;
`;

const Title = styled.h1`
    height: 70px;
    font-size: xxx-large;
    display: grid;
    margin-bottom: 15px;
    place-items: center;
`;

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    max-width: 1000px;
    left: 50%;
    transform: translateX(-50%);
`;

const ProjectWrapper = styled.a`
    width: 300px;
    height: 100px;
    border-radius: 5px;
    background-color: lightgrey;
    text-decoration: none;
    margin: 5px;

    display: grid;

    place-items: center;

    transition: all 0.25s ease-in-out;
    cursor: pointer;

    :hover {
        background: rgba(86,252,70,1);
        transform: scale(1.025);
    }
`;

const ProjectTitle = styled.h1`
    margin: 5px;
    height: 50%;
    color: black;
    font-size: x-large;
    display: grid;
    place-items: center;
`;

const Projects = (props) => {

    const username = props.username;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.json();
        })
        .then((actualData) => {
            setData(actualData)
            console.log(actualData)
            setError(null);
        })
        .catch((err) => {
            setError(err.message)
            setData(null)
        })
        .finally(() => {
            setLoading(false)
        })
    }, []);

    return (
        <Main id="projects">
            <Title>Github Projects</Title>
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <ProjectsWrapper>
                {data &&
                    data.map(({ id, name, html_url }) => {

                        if (name === username) return <></>;

                        return (
                            <ProjectWrapper key={id} href={html_url}>
                                <ProjectTitle>{name.replaceAll("-", " ")}</ProjectTitle>
                            </ProjectWrapper>
                        )
                    })
                }
            </ProjectsWrapper>
          {loading &&
          <svg version="1.1" id="L4" style={{ position: "absolute", top: 0, width: "100%", height: 300 }} x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0">
            <circle fill="#fff" stroke="none" cx="35%" cy="50" r="4">
                <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.1"/>    
            </circle>
            <circle fill="#fff" stroke="none" cx="50%" cy="50" r="4">
                <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite" 
                begin="0.2"/>       
            </circle>
            <circle fill="#fff" stroke="none" cx="65%" cy="50" r="4">
                <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite" 
                begin="0.3"/>     
            </circle>
            </svg>
            }
        </Main>
    )
}

export default Projects;