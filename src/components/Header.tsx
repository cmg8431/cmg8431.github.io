import React, {
  useState,
  useEffect,
  useRef,
  FC,
  FunctionComponent,
  ReactNode,
} from 'react';
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

<<<<<<< HEAD
const HeaderArea = styled.div`
=======
const HeaderArea = styled.nav`
>>>>>>> 8874c67... feat: Add Seo component and edit UI
  position: relative;
  width: 100%;
  height: 3.5rem;
`;

const HeaderWrap = styled.div`
<<<<<<< HEAD
  border-bottom: 1px solid gray;
=======
  border-bottom: 1px solid #cccccc;
>>>>>>> 8874c67... feat: Add Seo component and edit UI
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
<<<<<<< HEAD
  height: 3.5rem;
=======
  height: 4rem;
>>>>>>> 8874c67... feat: Add Seo component and edit UI
  transition: 0.4s ease;
  background-color: white;
  &.hide {
    transform: translateY(-80px);
  }
`;

export default HeaderComponent;
