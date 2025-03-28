import { ProfileInfoClass } from "./Profile";
import styled from "styled-components";
import React from "react";

const HeaderContainer = styled.header`
  grid-column: 1/6;
  grid-row: 1/3;

  @media screen and (min-width: 900px) {
    grid-column: 1/5;
  }
`;

export class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <ProfileInfoClass
          name="Jeanne Francis Rivas"
          position="IT Programmer • Web Developer"
        />
      </HeaderContainer>
    );
  }
}
