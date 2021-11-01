import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const FooterComponent: FunctionComponent = () => {
  return (
    <FooterWrapper>
      © 2021 Developer &nbsp;
      <DevelopText to="https://github.com/cmg8431">@cmg8431</DevelopText>,
      Powered By Gatsby 😆
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  display: flex;
  margin-top: 7rem;
  margin-bottom: 7rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  color: white;
  font-family: 'Times New Roman', Times, serif;
`;

const DevelopText = styled(Link)`
  text-decoration: none;
  color: #676b8e;
`;
export default FooterComponent;
