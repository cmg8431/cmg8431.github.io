import React, { FC, FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useState } from 'react';
import { useCopyClipboard } from 'hooks';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeaderItemComponent: FunctionComponent = () => {
  const [toastState, setToastState] = useState<boolean>(false);
  const [clipboardState, copyToClipboard] = useCopyClipboard();

  const copy = (e: { preventDefault: () => void }): void => {
    const { href } = location;
    setToastState(true);
    e.preventDefault();
    copyToClipboard(href);
    toast.success('현재 페이지의 주소가 복사되었습니다.', {
      autoClose: 3000,
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: 'dark',
    });
  };

  return (
    <HeaderItemWapper>
      <HeaderLogo to={'/'}>MinGI.tech</HeaderLogo>
      <HeaderSort />
      <ShareButton onClick={copy}>share</ShareButton>
      <HeaderText>portfolio</HeaderText>
    </HeaderItemWapper>
  );
};

const HeaderItemWapper = styled.div`
  color: white;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.div`
  margin-left: 2rem;
  @media (max-width: 900px) {
    margin-right: 1rem;
  }
`;

const ShareButton = styled.button`
  padding: 2px 0px 0px 0px;
  background-color: #ffffff00;
  font-size: 1.1rem;
  border: none;
  color: white;
`;

const HeaderSort = styled.div`
  width: 41.7rem;
`;
const HeaderLogo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  @media (max-width: 900px) {
    margin-left: 1rem;
    font-size: 1rem;
  }
`;

export default HeaderItemComponent;
