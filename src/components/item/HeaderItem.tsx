import React, { FC, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from '../../assets/img/Logo.svg';

const HeaderItemComponent: FunctionComponent = () => {
  return (
    <HeaderItemWapper>
      <Link to={'http://mingi.tech/'}>
        <HeaderLogo src={Logo} />
      </Link>
      <HeaderSort />
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

const HeaderSort = styled.div`
  width: 800px;
`;
const HeaderLogo = styled.img`
  color: white;
  width: 4.5rem;
  font-weight: 600;
`;

export default HeaderItemComponent;
