import React, { FunctionComponent } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PostItem from 'components/item/PostItem';
import { PostListItemType } from 'types/PostItem.types';

type PostListProps = {
  posts: PostListItemType[];
};

const PostList: FunctionComponent<PostListProps> = ({ posts }) => {
  return (
    <PostListWrapper>
      {posts.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter: { ...rest },
          },
        }: PostListItemType) => (
          <PostItem {...rest} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  );
};

const PostListWrapper = styled.div`
  width: 35rem;
  margin: 0 auto;
  padding: 50px 0 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 900px;
`;

export default PostList;
