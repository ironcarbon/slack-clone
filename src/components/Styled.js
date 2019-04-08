import styled, { css } from "styled-components";

export const Image = styled.img`
  display: inline-block;
  border-radius: 25px;
  width: 20%;
  ${props =>
    props.icon &&
    css`
      width: 10%;
    `}
`;
