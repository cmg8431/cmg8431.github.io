import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useCopyClipboard } from 'hooks';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeaderItemComponent: FunctionComponent = () => {
  const [clipboardState, copyToClipboard] = useCopyClipboard();

  const copy = (e: { preventDefault: () => void }): void => {
    const { href } = location;
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
      <HeaderLogo to={'/'}>
        <ImportantMark>MinGI</ImportantMark>.tech
      </HeaderLogo>
      <HeaderSort />
      <ShareButton onClick={copy}>share</ShareButton>
      <ShareButton
        onClick={() =>
          window.open(
            'https://adventurous-friend-e13.notion.site/c31b7e6ae1124dbcaad36964ac7a45cb',
            '_blank',
          )
        }
      >
        portfolio
      </ShareButton>
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

const ImportantMark = styled.mark`
  background: none;
  color: white;
  font-weight: 600;
`;

const ShareButton = styled.button`
  padding: 2px 0px 0px 0px;
  background-color: #ffffff00;
  font-size: 1rem;
  font-weight: 300;
  border: none;
  color: white;
  margin-left: 2rem;
  @media (max-width: 900px) {
    margin-right: 1rem;
  }
`;

const HeaderSort = styled.div`
  width: 64rem;
`;
const HeaderLogo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: 200;
  text-decoration: none;
  @media (max-width: 900px) {
    margin-left: 1rem;
    font-size: 1rem;
  }
`;

export default HeaderItemComponent;
