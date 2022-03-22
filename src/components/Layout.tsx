import React, { FunctionComponent } from 'react';
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
      <Main>{children}</Main>
      <FooterComponent />
    </Wrapper>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body, #root, .App{
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background-color: #08080B;   
        font-family: 'Spoqa Han Sans Neo', sans-serif;
    };
    button{
        cursor: pointer;
        outline: none;
        font-family: 'Spoqa Han Sans Neo', sans-serif;

    };
    input{
        outline: none;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
    }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export default LayoutComponent;
