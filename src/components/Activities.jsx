import React from "react";
import styled from "styled-components";
import { MainWrapper } from "./About";
import Info from "./Info";
import { other } from "../data/data";
import { motion } from "framer-motion";

const { activities } = other;

const ProjectContainer = styled(MainWrapper)`
  margin-block-end: 4rem;
  gap: 1.5rem
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
  padding: 1rem .75rem;
  border: 1px solid;
  grid-column: span 5;

  @media screen and (min-width: 450px) {
    grid-column: span 2;
  }
  
  @media screen and (min-width: 900px) {
    grid-column: span 1;
  }

  &:hover {
    background-color: var(--secondaryColor);
    color: var(--backgroundColor)
  }
`;


const InfoWrapper = styled.div`
`;

export class Activities extends React.Component {
  render() {
    return (
      <ProjectContainer>
        <ProjectHeader
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0}} 
        > My Other Works </ProjectHeader>
        {activities.map((proj, key) => {
          const {
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
                subheader={proj.subheader}
                header={proj.header}
                body={proj.body}
                list={proj.list}
                img={proj.img}
                key={key}
                alt={proj.alt}
                link={proj.link}
                />
            </>
          );
        })}
      </ProjectContainer>
    );
  }
}

// export {Activities};