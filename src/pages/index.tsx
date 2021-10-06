import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import LayoutComponent from 'components/Layout';
import PostList, { PostType } from 'components/PostList';
<<<<<<< HEAD
=======
import Seo from 'components/Seo';
>>>>>>> 8874c67... feat: Add Seo component and edit UI

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
<<<<<<< HEAD
=======
      <Seo title="Home" />
>>>>>>> 8874c67... feat: Add Seo component and edit UI
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
