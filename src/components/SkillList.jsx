import React from "react";
import styled from "styled-components";
import { Skill } from "./Skill";
import { Empty } from "./Empty";
import Pattern from "./../assets/rebel.png";
import { motion } from "framer-motion";

const SkillListContainer = styled(motion.ul)`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  margin-block-start: 48px;
  border: 1px solid;
  position: relative;
  justify-content: even;
  padding: 1rem .5rem;
  grid-column-start: 1;
  grid-column-end: 6;

  gap: 1rem;
  ${(props) => props.$rowspanstart && `grid-row-start: ${props.$rowspanstart};`}
  ${(props) => props.$rowspanend && `grid-row-end: ${props.$rowspanend};`}
  ${(props) =>
    props.$hasSubheading &&
    `&::after { content: "${props.$hasSubheading}"; position: absolute; top: -10px; left: 0; background-color: var(--backgroundColor); color: var(--secondaryColor); padding-inline: .5rem; font-weight: 600; background-image: url(${Pattern})}`}
    
    @media screen and (min-width: 900px) {
    ${(props) =>
      props.$colspanstart && `grid-column-start: ${props.$colspanstart};`}
    ${(props) => props.$colspanend && `grid-column-end: ${props.$colspanend};`}
  }
`;

const SkillListItem = styled.li``;

const SkillListSubHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;

export class SkillList extends React.Component {
  render() {
    return (
      <SkillListContainer
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0}} 
        transition={{delay: this.props.delay ?? '0', staggerChildren: 0.3, when: 'beforeChildren' }}
        $colspanstart={this.props.$colspanstart}
        $colspanend={this.props.$colspanend}
        $rowspanstart={this.props.$rowspanstart}
        $rowspanend={this.props.$rowspanend}
        $hasSubheading={this.props.$hasSubheading}
      >
        {/* <SkillListSubHeader> { this.props.subHeader } </SkillListSubHeader> */}
        {this.props.skills ? (
          this.props.skills.map((skill) => (
            <SkillListItem>
              <Skill icon={skill.icon} skillName={skill.skillName} />
            </SkillListItem>
          ))
        ) : (
          <Empty placeHolder={"No List to Display"} />
        )}
      </SkillListContainer>
    );
  }
}
