import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { PostFrontmatterType } from 'types/PostItem.types';

type PostItemProps = PostFrontmatterType & { link: string };

const PostItem: FunctionComponent<PostItemProps> = ({
  title,
  date,
  categories,
  summary,
  link,
  thumbnail: { publicURL },
}) => {
  return (
    <>
      <PostItemWrapper to={link}>
        <PostItemContent>
          <ThumbnailImage src={publicURL} alt="post img" />
          <TextContent>
            <CategoryWrapper>
              {categories.map(category => (
                <CategoryItem key={category}>{category}</CategoryItem>
              ))}
            </CategoryWrapper>
            <Title>{title}</Title>
            <Summary>{summary}</Summary>
            <Date>{date}</Date>
          </TextContent>
        </PostItemContent>
      </PostItemWrapper>
    </>
  );
};

const PostItemWrapper = styled(Link)`
  z-index: 1;
  text-decoration-line: none;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  :hover {
    z-index: 100;
    transform: translateY(-8px) scale(1.02) translateZ(0px);
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 11rem;
  border-radius: 0.2rem 0.2rem 0rem 0rem;
  object-fit: cover;
`;

const CategoryItem = styled.p`
  margin-right: 0.2rem;
  cursor: pointer;
  color: white;
  font-size: 0.6rem;
  background-color: #08080b;
  border-radius: 0.3rem;
  padding: 0.2rem;
  text-decoration: none;
  &:last-of-type {
    margin-right: 0;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  width: 16.3rem;
`;

const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.3rem;
  :hover {
    box-shadow: #0f0e12 0rem 1rem 5rem 0rem;
    z-index: 100;
  }

  @media (max-width: 926px) {
    padding: 1rem;
  }
`;

const TextContent = styled.div`
  padding: 2rem 1.5rem 2rem 1.5rem;
  background-color: #111114;
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.7;
  font-size: 0.9rem;
  color: #eaecf5;
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const Date = styled.div`
  font-size: 0.8rem;
  font-weight: 200;
  color: white;
  opacity: 0.7;
  margin-bottom: 2rem;
`;

export default PostItem;
