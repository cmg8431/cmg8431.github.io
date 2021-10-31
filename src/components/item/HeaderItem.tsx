import React, { FC, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from '../../assets/img/Logo.svg';

const HeaderItemComponent: FunctionComponent = () => {
  return (
    <HeaderItemWapper>
<<<<<<< HEAD
      <Link to={null}>
        <HeaderLogo>MinGI.tech</HeaderLogo>
=======
      <Link to={'http://mingi.tech/'}>
        <HeaderLogo src={Logo} />
>>>>>>> 107c7822065757579e3c47fc70f4ea21813577d2
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
const HeaderLogo = styled.img`
  color: white;
  width: 4.5rem;
  font-weight: 600;
`;

export default HeaderItemComponent;
