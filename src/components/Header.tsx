import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import HeaderItemComponent from './item/HeaderItem';

const HeaderComponent: FunctionComponent = () => {
  return (
    <HeaderArea>
      <HeaderWrap>
        <HeaderItemComponent />
      </HeaderWrap>
    </HeaderArea>
  );
};

const HeaderArea = styled.header`
  position: relative;
  width: 100%;
  height: 3.5rem;
  background-color: #08080b;
`;

const HeaderWrap = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 3.5rem;
  transition: 0.4s ease;
  background-color: #ffffff00;
  backdrop-filter: blur(20px);

  &.hide {
    transform: translateY(-80px);
  }
`;

export default HeaderComponent;
