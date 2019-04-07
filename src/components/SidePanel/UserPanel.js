import React from "react";
import styled, { css } from "styled-components";
import firebase from "../../firebase";

//import firebase from "firebase";

const Header = styled.h2`
  text-align: center;
`;

const Button = styled.button`
  display: block;
  ${props =>
    props.userButton &&
    css`
      display: inline-block;
      padding: 0.5rem;
      border-radius: 5px;
      font-size: 1rem;
    `}
`;
// const Table = styled.div`
//   background: pink;
//   margin: -1rem 1rem;
//   margin-right: 3rem;
// `;

const Image = styled.img`
  display: inline-block;
  width: 20%;
  border-radius: 25px;
`;

class UserPanel extends React.Component {
  state = {
    showMenu: false,
    user: this.props.currentUser
  };
  // componentDidMount() {
  //   let currentUserName = firebase.auth().currentUser.displayName;
  //   this.setState({ displayName: currentUserName });
  //   console.log(currentUserName);
  // }

  dropDownOptions = e => {
    e.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenuOptions);
    });
  };

  closeMenuOptions = e => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenuOptions);
    });
  };

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signed out");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // console.log(this.state.user);
    return (
      <div>
        <Header>Chit Chat</Header>
        <Image src={this.state.user.photoURL} />
        <Button userButton onClick={this.dropDownOptions}>
          <strong>{this.state.user.displayName}</strong>
        </Button>
        {this.state.showMenu ? (
          <div
            style={{ display: "grid", gridTemplateRows: "repeat(3,1fr)" }}
            className="dropDown"
          >
            <Button userButton>Sign in as User</Button>
            <Button userButton>Change Avatar</Button>
            <Button userButton onClick={this.handleSignOut}>
              Sign Out
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default UserPanel;
