import { styled } from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { IoPersonCircle, IoBriefcase, IoCall } from "react-icons/io5";
import { IconContext } from "react-icons";

const NavigationContainer = styled.nav`
  position: sticky;
  top: 0px;
  word-wrap: break-word;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  align-content: center;
  padding-block: 16px;
  height: fit-content;
  justify-content: center;
  z-index: 50;
  background-color: var(--backgroundColor);
  
  grid-column: span 5;
  border-bottom: 1px solid var(--fontColor);
  
  @media screen and (min-width: 450px) {
    flex-flow: row wrap;
    margin-inline: auto;
    padding-inline: 32px;
    justify-content: auto;
  }
  
  
  @media screen and (min-width: 900px) {
    top: 16px;
    grid-row: 1 / 2;
    grid-column: 1;
    max-width: inherit;
    border: 0;
    border-right: 1px solid var(--fontColor);
    flex-flow: column wrap;

  }

`;

const ProfileWrapper = styled.div`
  transform: scale(75%);
  width: 100px;
  margin-inline: auto;
  transition: 500ms  cubic-bezier(.07,.81,.44,.32) transform;
  
  &:hover {
    transform: rotate(-15deg);
    }
    
    @media screen and (min-width: 450px) {
      margin-inline: 0; 
      margin-inline-end: 2rem;

  }
`;
const ProfilePicture = styled.span`
  display: inline-block;

  background-color: var(--fontColor);
  color: var(--backgroundColor);
  transition: 500ms ease-in;

  width: inherit;
  height: 100px;
  border-radius: 100svh;
  text-align: center;
  vertical-align: center;
  font-weight: 700;
  font-size: 2rem;
  line-height: 6rem;
  font-family: "DM Serif Display";


  &:hover {
    background-color: var(--secondaryColor)
  }
`;  

const ProfileNav = styled.nav`
margin-block-start: 8px;

@media screen and (min-width: 450px) {
  margin-inline-start: auto;

  margin-block-start: 0;

}
  @media screen and (min-width: 900px) {
  margin-inline-start: 0;
}
`;

const ProfileList = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
  align-items: center;
  height: 100%;
  margin-inline-start: auto;
  
  @media screen and (min-width: 900px) {
  align-items: start;
  flex-flow: column wrap;
  margin-inline-start: 0;
  height: auto;
}
`;

const ProfileListItem = styled.li`
  display: flex;
  gap: 0.5rem;
  font-weight: 300;
  text-decoration: none;
  align-items: flex-start;
  flex-flow: row wrap;
  font-size: 1rem;
  
  @media screen and (min-width: 900px) {
    flex-flow: column wrap;
    margin-block-start: 1.5rem;
}
`;

export class Navigation extends React.Component {
  constructor() {
    super();
    this.links = [
      { linkTo: "/", linkName: "About" },
      { linkTo: "Projects", linkName: "Projects" },
      { linkTo: "Other", linkName: "Other" },
      { linkTo: "Contact", linkName: "Contact" },
    ];
  }
  render() {
    return (
      <NavigationContainer>
        <ProfileWrapper>
          <ProfilePicture>JFR.</ProfilePicture>
        </ProfileWrapper>
        <ProfileNav>
          <ProfileList>
            {this.links.map((linkItem, index) => {
              return (
                <ProfileListItem key={index}>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                    to={linkItem.linkTo}
                  >
                    {" "}
                    {linkItem.linkName}{" "}
                  </NavLink>
                </ProfileListItem>
              );
            })}
          </ProfileList>
        </ProfileNav>
      </NavigationContainer>
    );
  }
}
