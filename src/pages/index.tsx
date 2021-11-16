import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import LayoutComponent from 'components/Layout';
import PostList, { PostType } from 'components/PostList';

import { PostListItemType } from 'types/PostItem.types';
import BannerComponents from 'components/Banner';
import SEO from 'components/Seo';

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
  };
};

const IndexPage: FunctionComponent<IndexPageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <LayoutComponent>
      <SEO title={'MinGI.tech'} />
      <BannerComponents />
      <TextLayer>
        <BlogText>DEVELOP BLOG</BlogText>
      </TextLayer>
      <PostList posts={edges} />
    </LayoutComponent>
  );
};

const TextLayer = styled.div`
  height: 25rem;
`;
const BlogText = styled.div`
  margin-top: 3rem;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-size: 8rem;
  font-weight: 100;
  position: sticky;
  top: 100px;
  z-index: 0;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;
export const queryPostList = graphql`
  query queryPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
