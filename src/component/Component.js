import React from "react";

class Component extends React.Component {
  state = {
    name: "Tran Van Loc",
    address: "Thua Thien Hue",
    age: 20,
  };

  // handleClick = () => {
  //   console.log("click me", this.state.name);
  // };
  handleClick(event) {
    console.log("click me", Math.floor(Math.random() * 100 + 1));
    this.setState({
      name: "Nguyen Van A",
      age: Math.floor(Math.random() * 100 + 1),
    });
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
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me???
        </button>
        <button onMouseOver={this.handleHoverMe}>Click me???</button>
      </div>
    );
  }
}

export default Component;
