import React, { FC, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderItemComponent: FunctionComponent = () => {
  return (
    <HeaderItemWapper>
      <HeaderLogo>
        Min<Dmddo>GI</Dmddo>
      </HeaderLogo>
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
const HeaderLogo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;
const Dmddo = styled(HeaderLogo)`
  font-weight: 200;
  display: inline;
  list-style-type: none;
`;

export default HeaderItemComponent;
