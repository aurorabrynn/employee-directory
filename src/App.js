import React, { Component } from "react";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {

  render() {
    return (
      <Wrapper>
        <Title>Employees</Title>
        <Table />
      </Wrapper>
    );
  }
}

export default App;
