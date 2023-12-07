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
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    // this.setState({
    //   name: event.target.value,
    // });
    console.log(this.state);
  };
  //JSX
  render() {
    return (
      <div>
        My Name Ís {this.state.name} and my age is {this.state.age}
        <h1>My Address is {this.state.address}</h1>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <button> Click Form !!!</button>
        </form>
      </div>
    );
  }
}

export default Component;
