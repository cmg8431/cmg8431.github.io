import React, { FC, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderItemComponent: FunctionComponent = () => {
  return (
    <HeaderItemWapper>
      <Link to={null}>
        <HeaderLogo>MinGI.tech</HeaderLogo>
      </Link>
      <HeaderSort />
      <HeaderText>share</HeaderText>
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
`;

const HeaderSort = styled.div`
  width: 35rem;
`;
const HeaderLogo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

export default HeaderItemComponent;
