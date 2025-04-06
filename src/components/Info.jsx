import React from "react";
import styled, { css } from "styled-components";
import { List } from "./List";
import { Image } from "./Image";
import { motion } from "framer-motion";

const InfoContainer = styled(motion.div)`
  margin-block-start: 2rem;
  
  grid-column-start: 1;
  grid-column-end: 6;
  grid-column: 1 / 6;

  ${(props) => props.$rowspanstart && `grid-row-start: ${props.$rowspanstart};`}
  ${(props) => props.$rowspanend && `grid-row-end: ${props.$rowspanend};`}
  
  @media screen and (min-width: 900px) {
    ${(props) => props.$colspan && `grid-column: ${props.$colspan};`}
    ${(props) => props.$colspanstart && `grid-column-start: ${props.$colspanstart};`}
    ${(props) => props.$colspanend && `grid-column-end: ${props.$colspanend};`}
    ${(props) => props.$rowspanstart && `grid-row-start: ${props.$rowspanstart};`}
    ${(props) => props.$hasPaddingInlineEnd && `padding-inline-end: 32px;`}
    ${(props) => props.$hasPaddingInlineStart && `padding-inline-start: 32px;`}
    ${(props) => props.$rowspan && `grid-row: ${props.$rowspan};`}
    ${(props) => props.$hasBorderInlineStart && `border-inline-start: 2px solid;`}
  }
`;

const InfoHeader = styled.h2`
  font-weight: 700;
  font-size: 1.75rem;
`;

const InfoBody = styled.p`
  // color: var(--bodyColor);
  margin-block-start: 1rem;
  line-height: 1.65rem;
  font-weight: 300;
  margin-block-end: 1rem;
`;

const InfoSubHeader = styled.span`
  display: inline-block;
  margin-block-start: 0.7rem;
  line-height: 1.35rem;
  font-weight: 500;
  color: var(--secondaryColor);

`;

const ProjectLink = styled.a`
  display: inline-block;
  background-color: var(--fontColor);
  color: var(--backgroundColor) !important;
  font-weight: 600;
  margin-block-start: .7rem;
  margin-block-end: 1rem;
  padding: 1rem .75rem;
  border: 1px solid;
  grid-column: span 5;
  height: fit-content;

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

export default class Info extends React.Component {
  variant = {
    initial: {
      opacity: 0, y: -10 
    },
    animate: { opacity: 1, y: 0},
    visible: (key) => ({
      opacity: 1,
      transition: { delay: key * 0.3} 
    }),


  }
  render() {
    return (
      <InfoContainer
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0}} 
        // custom={this.props.key} 
        // variants={this.variant}
        exit={{opacity: 0, y:10}}
        transition={{delay: this.props.delay ?? '0', staggerChildren: 0.3, when: 'beforeChildren' }}
        $colspan={this.props.$colspan}
        $colspanstart={this.props.$colspanstart}
        $colspanend={this.props.$colspanend}
        $rowspanstart={this.props.$rowspanstart}
        $rowspanend={this.props.$rowspanend}
        $hasBorderInlineStart={this.props.$hasBorderInlineStart}
        $hasPaddingInlineEnd={this.props.$hasPaddingInlineEnd}
        $hasPaddingInlineStart={this.props.$hasPaddingInlineStart}
        $rowspan={this.props.$rowspan}
        key={this.props.key}
      >
        {this.props.img ? (
          <Image src={this.props.img} alt={ this.props }/>
        ) : (
          ""
        )}
        <InfoHeader> {this.props.header} </InfoHeader>
        {this.props.subheader ? (
          <InfoSubHeader> {this.props.subheader}</InfoSubHeader> 
        ) : (
          ""
        )}
        {this.props.list ? (
          <List
            $isFlex={this.props.$isFlex}
            $gapSize={this.props.$gapSize}
            $isHighlighted={this.props.$isHighlighted}
            items={this.props.list}
          />
        ) : (
          ""
        )}
        <InfoBody> {this.props.body} </InfoBody>

        {
          this.props.link ? (
            <ProjectLink href={this.props.link} target="_blank"> Go to Project Link </ProjectLink>
          ) : (
            ""
          ) 
        }


      </InfoContainer>
    );
  }

}
