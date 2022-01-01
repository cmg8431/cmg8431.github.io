import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { PostListItemType } from 'types/PostItem.types';
import PostContent from '../components/PostContent';
import LayoutComponent from 'components/Layout';
import CommentWidget from 'components/CommentWidget';

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
      frontmatter: { title, summary, date },
    },
  } = edges[0];

  return (
    <div>
      <PostContent html={html} />
      <CommentWidget />
    </div>
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
          }
        }
      }
    }
  }
`;
