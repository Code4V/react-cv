import React from "react";
import styled from "styled-components";
import { MainWrapper } from "./About";
import Info from "./Info";
import { project } from "../data/data";
import { AnimatePresence, motion } from "framer-motion";

const { projects } = project;

const ProjectContainer = styled(MainWrapper)`
  margin-block-end: 4rem;
  gap: 1.5rem;
  min-height: 100vh;
  position: relative;
`;

const ProjectHeader = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;

  grid-column-start: 1;
  grid-column-end: 6;

  @media screen and (min-width: 900px) {
    
    grid-column: 1 / 5;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-block-end: 1rem;
  padding: .9rem .75rem;
  border: 1px solid;
  grid-column: span 5;

  @media screen and (min-width: 450px) {
    grid-column: span 2;
  }
  
  @media screen and (min-width: 900px) {
    grid-column: span 1;
  }

  &:focus-within {
    background-color: blue;
  }

  &:hover {
    background-color: var(--secondaryColor);
    color: var(--backgroundColor)
  }
`;

const ContentViewType = styled.div`
  display: none;
  position: absolute;
  grid-column: span 4;
  gap: 16px;
  height: fit-content;
  right: 8px; 
  // top: 8px;
  
  @media screen and (min-width: 650px) {
    display: flex;  
  }
`

const ProjectsContainer = styled(AnimatePresence)`
  // display: grid;
  // grid-column-template: subgrid;
`


const InfoWrapper = styled.div`
`;

export class Project extends React.Component {
  #STYLES = ['simple', 'full', 'short'];

  constructor(props) {
    super(props);
    this.state = { style: "full" };
  }

  changeStyle = (e) => {
    if (this.#STYLES.includes(e.target.dataset.viewtype)) {
      this.setState({ style: e.target.dataset.viewtype});
    } else this.setState({ style: "simple "}); 
  }

  changeToFull = () => {
    console.log(window.screenX)
  }

  render() {
    return (
      <ProjectContainer onResize={this.changeToFull}>
        <ProjectHeader 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0}} 
        > Projects Involved </ProjectHeader>
        {/* <ContentViewType> */}
          {/* <span>
            View Mode:
          </span> */}
            {/* <ProjectLink type="button" style={this.state.style === "full" ? { backgroundColor: "var(--secondaryColor)", color: "var(--backgroundColor)" } : {}} onClick={this.changeStyle} data-viewtype="full"> Full </ProjectLink>
            <ProjectLink type="button" style={this.state.style === "simple" ? { backgroundColor: "var(--secondaryColor)", color: "var(--backgroundColor)" } : {}} onClick={this.changeStyle} data-viewtype="simple"> Simple </ProjectLink>
          </ContentViewType> */}
<ProjectsContainer>
  { this.state.style === "simple" ?
      projects.map((proj, key) => {
      const {
        $colspan,
        $colspanstart,
        $hasPaddingInlineEnd,
        $colspanend,
        $rowspanend,
        $rowspanstart,
      } = proj.styles ?? "";
        return (
          <>
            <Info
              // $colspanstart={1}
              $colspan={"span 2"}
              $isFlex={true}
              $gapSize={".8rem"}
              $isHighlighted={true}
              delay={key * 0.2}
              header={proj.header}
              subheader={proj.subheader}
              // body={proj.body}
              list={proj.list}
              img={proj.img}    
              key={key}
              alt={proj.alt}
              link={proj.link}
            />
          </>
        )}) : ''
    }

    { this.state.style === "full" ? 
      projects.map((proj, key) => {
        const {
          $colspan,
          $colspanstart,
          $hasPaddingInlineEnd,
          $colspanend,
          $rowspanend,
          $rowspanstart,
        } = proj.styles ?? "";

        return (
          <>
            <Info
              $colspanstart={1}
              $colspanend={6}
              delay={key * 0.2}
              $isFlex={true}
              $gapSize={".8rem"}
              $isHighlighted={true}
              header={proj.header}
              subheader={proj.subheader}
              body={proj.body}
              list={proj.list}
              img={proj.img}
              key={key + 1}
              alt={proj.alt}
              link={proj.link}
              />
          </>
      )}) : ''
      }
      
      
    </ProjectsContainer>
      </ProjectContainer>
    );
  }
}

export {ProjectLink};