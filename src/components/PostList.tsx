import React, { FunctionComponent } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PostItem from 'components/item/PostItem';
<<<<<<< HEAD
import { PostListItemType } from 'types/PostItem.types'

type PostListProps = {
  posts: PostListItemType[]
=======

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
>>>>>>> 82047d69e41d6a9fb3a681dc26b59ce7f7694f18
}

const PostList: FunctionComponent<PostListProps> = ({ posts }) => {
  return (
<<<<<<< HEAD
    <PostListWrapper >
=======
    <PostListWrapper>
>>>>>>> 82047d69e41d6a9fb3a681dc26b59ce7f7694f18
      {posts.map(
        ({
          node: {
            id,
<<<<<<< HEAD
            fields:{slug},
            frontmatter: { ...rest },
          },
        }: PostListItemType) => (
          <PostItem {...rest} link={slug} key={id} />
=======
            frontmatter: { ...rest },
          },
        }: PostType) => (
          <PostItem {...rest} link="https://www.google.co.kr/" key={id} />
>>>>>>> 82047d69e41d6a9fb3a681dc26b59ce7f7694f18
        ),
      )}
    </PostListWrapper>
  );
};

const PostListWrapper = styled.div`
  width: 35rem;
  margin: 0 auto;
  padding: 50px 0 100px;
`;

export default PostList;
