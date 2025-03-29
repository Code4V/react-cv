import { createGlobalStyle, styled } from "styled-components";
import "./stylus/index.styl";
import DMSans from "./assets/fonts/DMSans.ttf";
import DMSerif from "./assets/fonts/DMSerifDisplay.ttf";
import Pattern from "./assets/rebel.png";
import Aragorn from "./assets/fonts/Aragorn.ttf";
import { Navigation } from "./components/Navigation";
import { Outlet } from "react-router-dom";
import React, { Suspense } from "react";

export const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSans});
  }

  @font-face {
    font-family: 'DM Serif Display';
    src: url(${DMSerif});
  }

  @font-face {
    font-family: 'Aragorn';
    src: url(${Aragorn});
  }

  body {
    font-family: 'Aragorn';
    background-image: url(${Pattern});
    // font-family: 'DM Sans';
  };

  a { 
    text-decoration: none;
    transition: 150ms ease-in;
    color: var(--fontColor);

    &:visited {
      color: var(--fontColor);
    }

    &.active {
      font-weight: 600;
      color: var(--secondaryColor)
    }
  }

  * {
    // outline: 1px solid green
  }


`;

const ImagePreloader = styled.div`
  background-color: red;
  height: 100px;
  width: 100px;
`;

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  // grid-template-rows: repeat(2, 1fr);
  
  padding-block-end: 64px;
  // height: 140svh;  
  
  @media screen and (min-width: 900px) {
    padding-block-start: 64px;
    margin-inline: auto;
    max-width: 1024px;
    grid-template-columns: 250px 250px 125px 125px 250px;
    
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <GlobalFont />
        <Navigation />
        <Suspense fallback={ImagePreloader}>
          <Outlet />
        </Suspense>
      </MainContainer>
    );
  }
}
