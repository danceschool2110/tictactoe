import React from 'react';
import styled ,{ css} from "styled-components";

const StyledCard = styled.div`
  position: relative;
  
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: calc(100% - 36px);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  border: 1px solid red;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors};;
`;
const CardNumber = styled.span`
    font-size: 18;
    font-weight: bold;
    background: linear-gradient(
      86.88deg, 
      #7D6AFF 1.38%, 
      #FFB86C 64.35%, 
      #FC2872 119.91%
    );
    ${props => props.secondary && css`
      background: linear-gradient(
        86.88deg, 
        green, 
        yellow
      );
    `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`
const CardMeta = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`
const CardItem = (props) => {
  console.log(props)
  return (
      <React.Fragment>
          {/* <GlobalStyle></GlobalStyle> */}
          <StyledCard>
              <CardImage>
                  <CardImg 
                      src="https://cdn.dribbble.com/users/2400293/screenshots/16758868/media/8a20438ee0cbb3ffaa0108523e7e1875.png?compress=1&resize=1200x900&vertical=top"
                  />
              </CardImage>
              <CardContent>
                  <CardTop>
                      <CardUser>
                          <UserAvatar src="https://cdn.dribbble.com/users/2400293/screenshots/16758868/media/8a20438ee0cbb3ffaa0108523e7e1875.png?compress=1&resize=1200x900&vertical=top"/>
                          <UserName>@ndt.2110</UserName>
                      </CardUser>
                      <CardMeta>
                          <img src="/coolicon.svg" alt="heart" />
                          <span>256</span>
                      </CardMeta>
                  </CardTop>
                  <CardFooter>
                      <CardTitle>Cosnic PerspecLive</CardTitle>
                      <CardNumber secondary={props.secondary}>12,000 PSL</CardNumber>
                  </CardFooter>    
              </CardContent>
          </StyledCard>
      </React.Fragment>
  );
};

export default CardItem;