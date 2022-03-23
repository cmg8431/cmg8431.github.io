import React, { FunctionComponent, useEffect } from 'react';
import { graphql } from 'gatsby';
import { PostListItemType } from 'types/PostItem.types';
import PostContent from '../components/PostContent';
import { ToastContainer } from 'react-toastify';
import PostHead from 'components/PostHead';
import LayoutComponent from 'components/Layout';

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
  };
  html: string;
};

const PostTemplate: FunctionComponent<PostTemplateProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: { publicURL },
      },
    },
  } = edges[0];

  return (
    <LayoutComponent>
      <PostHead
        title={title}
        summary={summary}
        date={date}
        categories={categories}
        thumbnail={{
          publicURL: publicURL,
        }}
      />
      <PostContent html={html} />
      <ToastContainer />
    </LayoutComponent>
  );
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
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
