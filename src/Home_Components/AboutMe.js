import React from 'react'
import styled from 'styled-components'
import { mainTextColor, secondaryBackgroundColor } from '../config';

const Main = styled.div`
    color: ${mainTextColor};
    background-color: ${secondaryBackgroundColor};
`;

const AboutMe = (props) => {
  return (
    <Main>
        <div>Hi</div>
    </Main>
  )
}

export default AboutMe;