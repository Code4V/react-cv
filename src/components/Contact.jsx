import React from "react";
import styled from "styled-components";
import Info from "./Info";
import { render } from "@react-email/render";
import Email from "./../emails";
import { ProjectLink } from "./Project";
import { ProfileInfoClass } from "./Profile";
import { MainWrapper } from "./About";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";


const ContactWrapper = styled(MainWrapper)`
  margin-block-end: 100vh;
  width: 718px;
  display: grid;
  grid-template-columns: subgrid;
  padding-inline: 24px;
`;

const ContactLink = styled(ProjectLink)`
`;

const ContactHeader = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;

  grid-column-start: 1;
  grid-column-end: 5;
`;

const list = [
  {
    icon: FaGithub(),
    title: "Github",
    alink: "https://github.com/Code4V",    
  },
  {
    icon: FaLinkedin(),
    title: "LinkedIn",
    alink: "https://www.linkedin.com/in/jeanne-francis-rivas-015750285/",    
  },
]

export class Contact extends React.Component {

  componentDidMount() {
    document.querySelector("#contact").scrollIntoView({behavior: "smooth"});
  }
  
  render() {


    return (
      <ContactWrapper id="contact">
        <ContactHeader
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0}} 
        > Contact Me </ContactHeader>
        <Info header="Email" subheader="rivasjeannefrancis@gmail.com" $colspanstart={1}/>
        <Info header="My Socials" list={list} $colspanstart={1}/>
        <Info header="Contact Number" list={["0995-200-1867 ( GLOBE )", "0967-004-3898 ( GOMO )"]} $colspanstart={1}/>
      </ContactWrapper>
    );
  }
}
