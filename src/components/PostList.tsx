import React, { FunctionComponent, useMemo } from 'react';
import styled from 'styled-components';
import PostItem from 'components/item/PostItem';
import { PostListItemType } from 'types/PostItem.types';

export interface PostListProps {
  selectedCategory: string;
  posts: PostListItemType[];
}

const PostListComponent: FunctionComponent<PostListProps> = ({
  selectedCategory,
  posts,
}) => {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  );

  return (
    <PostListWrapper>
      {postListData.map(
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
  max-width: 83rem;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-auto-rows: 23.75rem;
  row-gap: 3.5rem;
  -webkit-box-pack: justify;
  justify-content: space-around;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 18.75rem);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 21.25rem);
    grid-auto-rows: 22.5rem;
  }
`;

export default PostListComponent;
