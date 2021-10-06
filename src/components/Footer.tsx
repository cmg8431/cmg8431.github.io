import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const FooterComponent: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2021 Developer mingi, Powered By Gatsby.
    </FooterWrapper>
  );
};

<<<<<<< HEAD
const FooterWrapper = styled.div`
=======
const FooterWrapper = styled.footer`
>>>>>>> 8874c67... feat: Add Seo component and edit UI
  display: flex;
  margin-top: auto;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
`;

export default FooterComponent;
