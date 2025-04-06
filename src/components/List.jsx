import React from "react";
import styled from "styled-components";

const ListContainer = styled.ul`
  ${(props) => props.$isFlex && `display: flex;`}
  ${(props) => props.$gapSize && `gap: ${props.$gapSize};`}
  margin-block-start: 12px;
`;

const ListItem = styled.li`
  ${(props) => props.$isHighlighted && `
    // background: var(--fontColor);
    // color: var(--backgroundColor); 
    letter-spacing: 1.5px;
    border: 1px var(--fontColor) solid;
    font-weight: 700;
    padding-inline: 8px;
    `};
  margin-block: 8px;
  line-height: 1.65rem;
`;

const LinkAnchor = styled.a`
  color: var(--secondaryColor);
  font-weight: 500;
  font-style: italic;
  display: flex;
  gap: 8px;
  align-items: center;
  width: fit-content;


  &:hover {
    color: var(--secondaryColor);
  }
`

const LinkIcon = styled.span`
  align-self: center;
`

const NoList = styled.p`
  font-style: italic;
`;

export class List extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <ListContainer
        $isFlex={this.props.$isFlex}
        $gapSize={this.props.$gapSize}
      >
        {this.props.items ? (
          this.props.items.map((item, key) => {
            const {title, alink, icon } = item;
             
            return (
              <ListItem $isHighlighted={this.props.$isHighlighted} key={key}>
              { !item.alink ? (
                <>
                  { item } { (this.props.hasSeparator) ? " |" : '' }
                </>)
                : (
                <LinkAnchor href={ alink } target="_blank">
                  {icon} { title }
                </LinkAnchor>
              )}  
            </ListItem>
          );
          })
        ) : (
          <NoList> No list to be found </NoList>
        )}
      </ListContainer>
    );
  }
}
