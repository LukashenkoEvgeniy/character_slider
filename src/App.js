import React, {Component} from 'react';
import styled from "styled-components";

import Content from "./containers/Content";
import {backgroundColor} from "./styles/cosnts";
import githubIcon from "./assets/github-logo.png";

class App extends Component {
    render() {
        return (
            <Body>
            <a href="https://github.com/LukashenkoEvgeniy/character_slider">
                <GithubIcon src={githubIcon}/>
            </a>
            <Content/>
            </Body>
        );
    }
}

export default App;

const GithubIcon = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 145px;
  height: 145px;
  @media(max-width: 1024px) {
    width: 55px;
    height: 55px;
  }
`;

const Body = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${backgroundColor};;
`;