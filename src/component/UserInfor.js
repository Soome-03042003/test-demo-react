import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Tran Van Loc",
    address: "Thua Thien Hue",
    age: 20,
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    // this.setState({
    //   name: event.target.value,
    // });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {" "}
        My Name Ís {this.state.name} and my age is {this.state.age}
        <h1>My Address is {this.state.address}</h1>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name is {this.state.name}</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <button> Click Form !!!</button>
          <label>Age is {this.state.age}</label>
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <button>Click Age ??</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
