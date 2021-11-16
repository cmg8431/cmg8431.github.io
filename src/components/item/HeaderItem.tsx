import React, { FC, FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useState } from 'react';
import { ClipModal } from 'components/ClipModal';
import { useCopyClipboard } from 'hooks';

const HeaderItemComponent: FunctionComponent = () => {
  const [toastState, setToastState] = useState<boolean>(false);
  const [clipboardState, copyToClipboard] = useCopyClipboard();

  const copy = (): void => {
    const { href } = location;
    setToastState(true);
    copyToClipboard(href);
  };

  const useURL = typeof window !== 'undefined' && window.location.href;

  const ClipModalComponent = () => {
    return (
      <ClipModal
        message={
          clipboardState.isSuccess
            ? '현재 페이지의 주소가 복사되었습니다!'
            : '현재 페이지의 주소 복사를 실패했습니다.'
        }
        timeout={2}
        state={toastState}
        setState={setToastState}
      />
    );
  };
  return (
    <HeaderItemWapper>
      <HeaderLogo to={useURL}>MinGI.tech</HeaderLogo>
      <HeaderSort />
      <ShareButton onClick={copy}>share</ShareButton>
      <HeaderText>portfolio</HeaderText>
      <ClipModalComponent />
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
