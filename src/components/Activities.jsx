import React from "react";
import styled from "styled-components";
import { MainWrapper } from "./About";
import Info from "./Info";
import { other } from "../data/data";

const { activities } = other;

const ProjectContainer = styled(MainWrapper)`
  margin-block-end: 4rem;
  gap: 1.5rem
`;

const ProjectHeader = styled.h2`
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
  padding: 1rem .75rem;
  border: 1px solid;
  grid-column: span 2;
  
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
        <ProjectHeader> My Other Works </ProjectHeader>
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
                $isFlex={true}
                $gapSize={".8rem"}
                subheader={proj.subheader}
                header={proj.header}
                body={proj.body}
                list={proj.list.map(e => e + ' |')}
                img={proj.img}
                key={key}
                alt={proj.alt}
                />
              <ProjectLink href={proj.link} target="_blank"> Go to Website Link </ProjectLink>
            </>
          );
        })}
      </ProjectContainer>
    );
  }
}

// export {Activities};