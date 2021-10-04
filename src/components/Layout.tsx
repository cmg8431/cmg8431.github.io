import React, { FunctionComponent, ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import FooterComponent from './Footer';
import HeaderComponent from './Header';

interface Props {
  children: React.ReactNode;
}

const LayoutComponent: FunctionComponent<Props> = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Wrapper>
  );
};

const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
    html, body, #root, .App{
        width: 100%;
        height: 100%;
        min-height: 100vh;
        font-family: "Noto Sans KR", sans-serif !important;
        background-color: white;   
    };
    button{
        cursor: pointer;
        outline: none;
    };
    input{
        outline: none;
    }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export default LayoutComponent;
