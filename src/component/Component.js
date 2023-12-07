import React from "react";

class Component extends React.Component {
  state = {
    name: "Tran Van Loc",
    address: "Thua Thien Hue",
    age: 20,
  };

  //JSX
  render() {
    return (
      <div>
        My Name Ís {this.state.name} and my age is {this.state.age}
        <h1>My Address is {this.state.address}</h1>
      </div>
    );
  }
}

export default Component;
