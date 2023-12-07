import React from "react";

class Component extends React.Component {
  state = {
    name: "Tran Van Loc",
    address: "Thua Thien Hue",
    age: 20,
  };
  handleClick(state) {
    console.log("click me");
  }
  handleHoverMe(event) {
    console.log(event.pageX);
  }
  //JSX
  render() {
    return (
      <div>
        My Name Ís {this.state.name} and my age is {this.state.age}
        <h1>My Address is {this.state.address}</h1>
        <button onClick={this.handleClick}>Click me???</button>
        <button onMouseOver={this.handleHoverMe}>Click me???</button>
      </div>
    );
  }
}

export default Component;
