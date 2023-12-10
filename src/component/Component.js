import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class Component extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Tran Van Loc", age: 16 },
      { id: 2, name: "Tran Van A", age: 25 },
      { id: 3, name: "Tran Van Z", age: 40 },
    ],
  };

  //JSX
  render() {
    return (
      <div>
        <DisplayInfor listUser={this.state.listUser} />
        <UserInfor />
      </div>
    );
  }
}

export default Component;
