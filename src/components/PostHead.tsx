import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { PostFrontmatterType } from 'types/PostItem.types';

const PostHeadComponent: FunctionComponent<PostFrontmatterType> = ({
  title,
  summary,
  date,
  categories,
  thumbnail: { publicURL },
}) => {
  return (
    <PostHeadWrapper>
      <PostHeadContainer>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <PostInfoWrapper>
          <Date>{date}</Date>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </PostInfoWrapper>
        <Line />
        <ThumbnailImage src={publicURL} alt="thumbnail" />
      </PostHeadContainer>
    </PostHeadWrapper>
  );
};

const PostHeadWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0px 8px;
    display: flex;
  }
`;

const PostHeadContainer = styled.div`
  color: white;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  width: 768px;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;
const Line = styled.div`
  background-color: #313135;
  width: 100%;
  border-radius: 1rem;
  height: 1px;
  margin-bottom: 3rem;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 30rem;
  min-height: 30rem;
  border-radius: 0.2rem 0.2rem 0rem 0rem;
  object-fit: cover;
`;

const PostInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

const CategoryItem = styled.p`
  margin-right: 0.2rem;
  color: white;
  font-size: 0.6rem;
  background-color: #111114;
  border-radius: 0.3rem;
  padding: 0.3rem;
  font-weight: 300;
  text-decoration: none;
  &:last-of-type {
    margin-right: 0;
  }
`;

const Title = styled.div`
  font-size: 3.5rem;
  font-weight: 600;
  margin: 2rem 0rem 1rem 0rem;
`;

const Summary = styled.div`
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const Date = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  margin-right: 0.2rem;
`;

export default PostHeadComponent;
