import React from 'react';
import styled from 'styled-components'; 
import { InView } from 'react-intersection-observer';

const ImageWrapper = styled.div`
  position: relative;

  max-height: 400px;
  overflow: hidden;
  margin-block-end: 16px;

  &::after {
    position: absolute;
    display: block;
    content: '';
    height: 100%;
    inset: 0;
    left: 0;
    width: 12px;
    background-color: var(--secondaryColor);
  }
  &::before {
    position: absolute;
    display: block;
    content: '';
    padding-block-start: 4px;
    padding-inline-start: 4px;
    color: var(--backgroundColor);
    height: 100%;
    inset: 0;
    left: 0;
    width: 18px;
    z-index: 2;
    opacity: 50%;
    background-color: var(--secondaryColor);
  }
`;

const ImageDisplay = styled.img`
  object-fit: fill;
  transition: 800ms cubic-bezier(0,1.1,.96,.53) filter;
  filter: grayscale(1) blur(4px);

  &:hover {
    filter: none;
  }

`;

export class Image extends React.Component {
  render(){
    return(
      <ImageWrapper>
        <InView delay={300}>
          {({inView, ref}) => (
            <ImageDisplay style={ inView ? { filter: "none" } : { filter: "grayscale(1) blur(4px)" } } ref={ref} src={ this.props.src } alt={ this.props.alt.alt }/>
          )}
        </InView>
      </ImageWrapper>
    )
  }
}