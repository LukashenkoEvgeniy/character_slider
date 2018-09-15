import React, {Component} from 'react';
import styled from "styled-components";
import Content from "./containers/Content";
import {backgroundColor} from "./styles/cosnts";

class App extends Component {
    render() {
        return (
            <Body>
                <Content/>
            </Body>
        );
    }
}
export default App;

const Body = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${backgroundColor};;
`;