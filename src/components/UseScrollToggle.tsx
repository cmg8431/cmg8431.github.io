import React, { FunctionComponent, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import TopArrow from '../assets/svg/TopArrow.svg';

const UseScrollToggleComponent: FunctionComponent = () => {
  const [ScrollY, setScrollY] = useState<number>(0);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  return (
    <div>
      <Button onClick={handleTop}>
        <img src={TopArrow} alt="TopArrow" />
      </Button>
    </div>
  );
};

const Button = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  cursor: pointer;
  right: 2rem !important;
  bottom: calc(2rem + env(safe-area-inset-bottom)) !important;
  border: 1px solid white;
  border-radius: 10px;
  opacity: 0.8;
  transition: all 0.15s;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 0.5;
  }
`;

export default UseScrollToggleComponent;
