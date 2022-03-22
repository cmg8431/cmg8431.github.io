import React, { FunctionComponent, useMemo } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import LayoutComponent from 'components/Layout';
import PostList from 'components/PostList';
import { PostListItemType } from 'types/PostItem.types';
import SEO from 'components/Seo';
import { ToastContainer } from 'react-toastify';
import CategoryList, { CategoryListProps } from 'components/CategoryList';
import queryString, { ParsedQuery } from 'query-string';

type IndexPageProps = {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
  };
};

const IndexPage: FunctionComponent<IndexPageProps> = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostListItemType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['All']++;

          return list;
        },
        { All: 0 },
      ),
    [],
  );

  return (
    <LayoutComponent>
      <SEO
        title={'MinGI.tech'}
        description={
          '항상 Clean Code와 Test에 대한 고민을 하는 주니어 개발자입니다.'
        }
      />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
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
            categories
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
