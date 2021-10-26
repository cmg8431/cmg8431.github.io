import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import LayoutComponent from 'components/Layout';
import PostList, { PostType } from 'components/PostList';

<<<<<<< HEAD
import { PostListItemType } from 'types/PostItem.types';

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
  };
};

=======
interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
  };
}
>>>>>>> 82047d69e41d6a9fb3a681dc26b59ce7f7694f18
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
<<<<<<< HEAD
          fields {
            slug
          }
=======
>>>>>>> 82047d69e41d6a9fb3a681dc26b59ce7f7694f18
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
