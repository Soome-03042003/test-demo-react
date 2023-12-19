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
  handleNewUser = (userObj) => {
    this.setState({
      listUser: [userObj, ...this.state.listUser],
    });
  };
  handleDeleteUser = (idUser) => {
    let listUserClone = this.state.listUser;
    listUserClone = listUserClone.filter((item) => item.id !== idUser);
    this.setState({
      listUser: listUserClone,
    });
  };
  //JSX
  render() {
    return (
      <>
        <DisplayInfor
          listUser={this.state.listUser}
          handleDeleteUser={this.handleDeleteUser}
        />
        <UserInfor handleNewUser={this.handleNewUser} />
      </>
    );
  }
}

export default Component;
