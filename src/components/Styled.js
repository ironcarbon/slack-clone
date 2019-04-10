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
