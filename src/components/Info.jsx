import React from "react";
import styled, { css } from "styled-components";
import { List } from "./List";
import { Image } from "./Image";

const InfoHeader = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
`;

const InfoBody = styled.p`
  margin-block-start: 1rem;
  line-height: 1.65rem;
  font-weight: 300;
`;

const InfoSubHeader = styled.span`
  display: inline-block;
  margin-block-start: 0.7rem;
  line-height: 1.35rem;
  font-weight: 500;
  color: var(--secondaryColor);

`;

export default class Info extends React.Component {
  render() {
    return (
      <InfoContainer
        $colspanstart={this.props.$colspanstart}
        $colspanend={this.props.$colspanend}
        $rowspanstart={this.props.$rowspanstart}
        $rowspanend={this.props.$rowspanend}
        $hasPaddingInlineEnd={this.props.$hasPaddingInlineEnd}
        key={this.props.keyb}
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
            items={this.props.list}
          />
        ) : (
          ""
        )}
        <InfoBody> {this.props.body} </InfoBody>

      </InfoContainer>
    );
  }
}
const InfoContainer = styled.div`
  margin-block-start: 2rem;
  
  grid-column-start: 1;
  grid-column-end: 6;
  ${(props) => props.$rowspanstart && `grid-row-start: ${props.$rowspanstart};`}
  ${(props) => props.$rowspanend && `grid-row-end: ${props.$rowspanend};`}
  
  @media screen and (min-width: 900px) {
    ${(props) => props.$colspanstart && `grid-column-start: ${props.$colspanstart};`}
    ${(props) => props.$colspanend && `grid-column-end: ${props.$colspanend};`}
    ${(props) => props.$rowspanstart && `grid-row-start: ${props.$rowspanstart};`}
    ${(props) => props.$hasPaddingInlineEnd && `padding-inline-end: 32px;`}
  }
`;
