import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const FooterComponent: FunctionComponent = () => {
  return (
    <FooterWrapper>
      Developer &nbsp;
      <DevelopText to="https://github.com/cmg8431">@cmg8431</DevelopText>,
      Powered By Gatsby 😆
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  margin-top: 5rem;
  background-color: #111114;
  color: white;
  font-size: 0.8rem;
`;

const DevelopText = styled(Link)`
  text-decoration: none;
  color: #676b8e;
`;
export default FooterComponent;
