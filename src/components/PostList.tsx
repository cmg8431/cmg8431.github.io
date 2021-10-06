import React, { FunctionComponent } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PostItem from 'components/item/PostItem';

export type PostType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      summary: string;
      date: string;
    };
  };
};

interface PostListProps {
  posts: PostType[];
}

const PostList: FunctionComponent<PostListProps> = ({ posts }) => {
  return (
    <PostListWrapper>
      {posts.map(
        ({
          node: {
            id,
            frontmatter: { ...rest },
          },
        }: PostType) => (
          <PostItem {...rest} link="https://www.google.co.kr/" key={id} />
        ),
      )}
    </PostListWrapper>
  );
};

<<<<<<< HEAD
const PostListWrapper = styled.div`
=======
const PostListWrapper = styled.ul`
>>>>>>> 8874c67... feat: Add Seo component and edit UI
  width: 35rem;
  margin: 0 auto;
  padding: 50px 0 100px;
`;

export default PostList;
