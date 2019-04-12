import styled, { css } from "styled-components";

export const RegisterBox = styled.div`
  max-width: 50%;
  margin: auto;
  border: 1px solid #f2f2f2;
`;

export const Message = styled.div`
  text-align: center;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid#26250d;
  width: 50%;
`;

export const Form = styled.form`
  margin: auto;
  width: 100%;
`;

export const Input = styled.input`
  display: block;
  padding: 0.8rem;
  margin: 0.85rem auto;
  width: 80%;
  border-radius: 5px;
  text: #f2f2f2;
  font-size: 1rem;
  ${props =>
    props.small &&
    css`
      display: inline-block;
      width: 40%;
      padding: 0.4rem;
      justify-content: flex-end;
      align-items: flex-end;
      font-size: 0.75;
    `}
    ${props => props.medium && css`
      width: 94%;
    `}
`;

export const P = styled.p`
  display: block;

  margin: 1rem auto;
  padding: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  background: var(--blue);
`;

export const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 30%;
  margin: auto;
  ${props =>
    props.icon &&
    css`
      width: 10%;
    `}
  ${props =>
    props.checked &&
    css`
      display: inline-block;
    `}
    ${props =>
    props.border &&
    css`
        margin: 2 rem auto;
        border-radius: 0%;
        width: 2rem;
        height: 2rem;
      `}
`;

export const Logo = styled.img`
  display: block;
  width: 30%;
  margin: 0 auto;
`;

export const Header = styled.h2`
  text-align: center;
  margin: 0.75rem;
  color: var(--cyan);
  ${props =>
    props.left &&
    css`
      text-align: left;
      margin: 0;
    `}
`;

export const Div = styled.div`
  margin: 1rem;
  ${props =>
    props.modal &&
    css`
      /* background-color: #fefefe; */
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      text-align: center;
    `}
  ${props =>
    props.active &&
    css`
      background: var(--very-light-gray);
      padding: 0.5rem;
    `}
`;

export const Button = styled.div`
  display: block;
  margin: auto;
  width: 30%;
  border-radius: 10%;

  font-size: 1rem;
  ${props =>
    props.userButton &&
    css`
      padding: 0.5rem;
      /* border-radius: 5px; */
      background: #d2d1cc;
      cursor: pointer;
      border: 1px solid #f4f4f4;
      width: 10%;
    `}
  ${props =>
    props.channelButton &&
    css`
      margin: 1rem;
      padding: 0.75rem 1rem;
      width: 20%;
      font-weight: bold;
      /* text-align: center; */
    `}
    ${props =>
    props.add &&
    css`
        border: 2px solid var(--green);
        color: var(--green);

        :hover& {
          background: var(--green);
          color: var(--white);
        }
      `}
      ${props =>
    props.cancel &&
    css`
          border: 2px solid var(--red);
          color: var(--red);
          :hover& {
            background: var(--red);
            color: var(--white);
          }
        `}
`;

export const Button1 = styled.button`
  display: block;
  padding: 1rem;
  width: 80%;
  margin: 1rem auto;
  background: #807d2e;
  text-align: center;
  border-radius: 5px;
  font-size: 1rem;
  color: var(--cyan);
  ${props => props.messageBtn && css`
    display: inline-block;
    width: 50%;
    font-weight: bold;
    
  `}
  ${props => props.reply && css`
    background: var(--yellow);
    :hover&{
      background: var(--dark-yellow);
    }
  `}
  ${props => props.update && css`
    background: var(--blue);
    :hover&{
      background: #363F59;
      
    }
  `}
`;

export const Modal = styled.div`
  /* height: 100% important!;
  width: 100% important!;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background: var(--very-light-gray);
  z-index: 99;
  margin: 0; */
  /* background: #fff; */
  /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const ChannelGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr 2fr;
  background: var(--very-light-gray);
  height: 100vh;
`;

export const ChannelDiv = styled.div`
  display: flex;
  flex-flow: columns;
  margin: 1rem;
  padding: 2rem 3rem;
  background: var(--white);
`;
