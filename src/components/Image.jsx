import React from 'react';
import styled from 'styled-components'; 
import { InView } from 'react-intersection-observer';

const ImageWrapper = styled.div`
  max-height: 400px;
  overflow: hidden;
  margin-block-end: 16px;
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