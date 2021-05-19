import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  /* state = {
    friends
  }; */

  render() {
    return (
      <Wrapper>
        <Title>Employees</Title>
        <EmployeeCard />
        {/* {this.state.friends.map(friend => (
          <EmployeeCard />
        ))}*/}
      </Wrapper>
    );
  }
}

export default App;
