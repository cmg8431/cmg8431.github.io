import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import LayoutComponent from 'components/Layout';
import PostList from 'components/PostList';

const IndexPage: FunctionComponent = () => {
  return (
    <LayoutComponent>
      <PostList />
    </LayoutComponent>
  );
};

export default IndexPage;
