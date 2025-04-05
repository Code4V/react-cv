import React from "react";
import styled from "styled-components";

const ListContainer = styled.ul`
  ${(props) => props.$isFlex && `display: flex;`}
  ${(props) => props.$gapSize && `gap: ${props.$gapSize};`}
  margin-block-start: 12px;
`;

const ListItem = styled.li`
  margin-block: 8px;
  font-weight: 300;
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
            console.log(item, title ,alink)
            return (
              <ListItem key={key}>
              { !item.alink ? (
                <>
                  { item } 
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
