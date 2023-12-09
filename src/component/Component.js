import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class Component extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Tran Van Loc", age: 12 },
      { id: 2, name: "Tran Van A", age: 12 },
      { id: 3, name: "Tran Van Z", age: 12 },
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
