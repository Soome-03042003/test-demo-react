import React from "react";
import "./DisplayInfor.scss";
// import logo from "../logo.svg";
class DisplayInfor extends React.Component {
  state = {
    thisShowList: true,
  };
  handleShowHidden = () => {
    this.setState((prevState) => ({
      thisShowList: !prevState.thisShowList,
    }));
  };
  render() {
    const { listUser } = this.props;

    return (
      <div className="DisplayInfor-container">
        <div>
          <span
            onClick={() => {
              this.handleShowHidden();
            }}
          >
            {this.state.thisShowList === true
              ? "hiden list User"
              : "Show List User"}
          </span>
        </div>
        {this.state.thisShowList && (
          <>
            {listUser.map((user, index) => {
              // console.log(index);

              return (
                <div className={+user.age > 18 ? "red" : "blue"} key={user.id}>
                  <h1 style={{ paddingTop: "50px", color: "pink" }}>
                    Ten Toi La {user.name}
                  </h1>
                  <br />
                  <h2>Tuoi : {user.age}</h2>
                  <button onClick={() => this.props.handleDeleteUser(user.id)}>
                    X
                  </button>
                </div>
              );

              // if (+user.age > 18 && +user.age < 25) {
              //   // +user :chuyen tu string sang number
              //   return (
              //     <div className="red" key={user.id}>
              //       <h1>Ten Toi La {user.name}</h1>
              //       <br />
              //       <h2>Tuoi : {user.age}</h2>
              //     </div>
              //   );
              // } else if (+user.age >= 25 && +user.age < 39) {
              //   return (
              //     <div className="green" key={user.id}>
              //       <h1>Ten Toi La {user.name}</h1>
              //       <br />
              //       <h2>Tuoi : {user.age}</h2>
              //     </div>
              //   );
              // } else {
              //   return (
              //     <div className="blue" key={user.id}>
              //       <h1>Ten Toi La {user.name}</h1>
              //       <br />
              //       <h2>Tuoi : {user.age}</h2>
              //     </div>
              //   );
              // }
            })}
            :
          </>
        )}
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
