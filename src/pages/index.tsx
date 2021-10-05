import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import LayoutComponent from 'components/Layout';
import PostList, { PostType } from 'components/PostList';

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
  };
}
const IndexPage: FunctionComponent<IndexPageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <LayoutComponent>
      <PostList posts={edges} />
    </LayoutComponent>
  );
};

export const queryPostList = graphql`
  query queryPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
          }
        }
      }
    }
  }
`;

export default IndexPage;
