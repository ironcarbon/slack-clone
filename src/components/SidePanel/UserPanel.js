import React from "react";
import styled, { css } from "styled-components";

const Header = styled.h2`
  text-align: center;
`;

const Button = styled.button`
  display: block;
  ${props =>
    props.userButton &&
    css`
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

class UserPanel extends React.Component {
  state = {
    showMenu: false
  };

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

  render() {
    return (
      <div>
        <Header>Chit Chat</Header>
        <Button userButton onClick={this.dropDownOptions}>
          User
        </Button>
        {this.state.showMenu ? (
          <div
            style={{ display: "grid", gridTemplateRows: "repeat(3,1fr)" }}
            className="dropDown"
          >
            <Button userButton>Sign in as User</Button>
            <Button userButton>Change Avatar</Button>
            <Button userButton>Sign Out</Button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default UserPanel;
