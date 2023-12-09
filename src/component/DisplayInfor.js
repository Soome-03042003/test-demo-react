import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { listUser } = this.props;
    return (
      <div>
        {listUser.map((user, index) => {
          console.log(index);
          return (
            <div key={user.id}>
              <h1>Ten Toi La {user.name}</h1>
              <br />
              <h2>Tuoi : {user.age}</h2>
            </div>
          );
        })}
      </div>
    );
    //destructuring array

    //  <div>
    //   <h1> Ten Toi La {listUser.name}</h1>

    //   <h2>Tuoi:{listUser.age}</h2>
    // </div>
  }
}

export default DisplayInfor;
