import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import LayoutComponent from 'components/Layout';
import PostList from 'components/PostList';

import { PostListItemType } from 'types/PostItem.types';
import BannerComponents from 'components/Banner';
import SEO from 'components/Seo';
import { ToastContainer } from 'react-toastify';

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
      <SEO
        title={'MinGI.tech'}
        description={
          '항상 Clean Code와 Test에 대한 고민을 하는 주니어 개발자입니다.'
        }
      />
      <BannerComponents />
      <TextWrapper>
        <BlogText>DEVELOP BLOG</BlogText>
      </TextWrapper>
      <PostList posts={edges} />
      <ToaskWrapper>
        <ToastContainer />
      </ToaskWrapper>
    </LayoutComponent>
  );
};

const ToaskWrapper = styled.div`
  font-size: 13px;
  font-family: 'Noto Sans KR Medium', sans-serif !important;
`;
const TextWrapper = styled.div`
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

  @media (max-width: 968px) {
    font-size: 4.5rem;
  }
  @media (max-width: 568px) {
    font-size: 4rem;
  }
  @media (max-width: 512px) {
    font-size: 3.5rem;
  }
  @media (max-width: 412px) {
    font-size: 3rem;
  }
  @media (max-width: 352px) {
    font-size: 2.5rem;
  }
  @media (max-width: 252px) {
    font-size: 2rem;
  }
  @media (max-width: 212px) {
    font-size: 1rem;
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
