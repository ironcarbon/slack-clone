import React from "react";
import styled, { css } from "styled-components";
import firebase from "../../firebase";
import { Image } from "../Styled";
import logo from "../img/logo.png";
import downArrow from "../img/down-arrow.png";
import { Logo, Header, Div, Button, P } from "../Styled";

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
      <Div>
        <Logo src={logo} />
        <Header>Chit Chat</Header>
        <Image src={this.state.user.photoURL} />
        <Button onClick={this.dropDownOptions}>
          <P style={{ color: "var(--pink)" }}>{this.state.user.displayName}</P>
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
      </Div>
    );
  }
}

export default UserPanel;
