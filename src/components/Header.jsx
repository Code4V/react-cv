import { ProfileInfoClass } from "./Profile";
import styled from "styled-components";
import React from "react";
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  grid-column: 1/6;
  grid-row: 1/3;

  @media screen and (min-width: 900px) {
    grid-column: 1/5;
  }
`;
export class Header extends React.Component {
  render() {
    return (
      <HeaderContainer
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0}} 
      >
        <ProfileInfoClass
          name="Jeanne Francis Rivas"
          position="IT Programmer • Web Developer"
        />
      </HeaderContainer>
    );
  }
}
