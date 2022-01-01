import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import LayoutComponent from 'components/Layout';
import CommentWidget from './CommentWidget';

type PostContentProps = {
  html: string;
};

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return (
    <LayoutComponent>
      <div>
        <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
      </div>
      <CommentWidget />
    </LayoutComponent>
  );
};

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;
  color: white;
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;
  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 10px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 10px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 10px 0;
    padding: 1px 15px;
    border-left: 2px solid white;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }
`;

export default PostContent;
