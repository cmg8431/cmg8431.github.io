import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { PostFrontmatterType } from 'types/PostItem.types';
import Thumbnail from '../../assets/img/PostImg.png';
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';

type PostItemProps = PostFrontmatterType & { link: string };

const PostItem: FunctionComponent<PostItemProps> = ({
  title,
  date,
  summary,
  link,
  thumbnail: { publicURL },
}) => {
  const [hover, setHover] = useState({ display: 'none' });
  const animatedItem = useScrollFadeIn();

  return (
    <>
      <PostItemWrapper
        to={link}
        onMouseEnter={e => setHover({ display: 'block' })}
        onMouseLeave={e => setHover({ display: 'none' })}
        {...animatedItem}
      >
        <PostItemContent>
          <ThumbnailImage src={publicURL} alt="post img" />
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
          <Date>{date}</Date>
        </PostItemContent>
        <Text style={hover}>click me</Text>
      </PostItemWrapper>
    </>
  );
};

const PostItemWrapper = styled(Link)`
  z-index: 1;
  text-decoration-line: none;
  text-decoration: none;
  border-radius: 1rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  text-align: center;
  position: absolute;
  margin-right: -6rem;
  font-family: 'Times New Roman', Times, serif;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(-4px);
  filter: blur(-4px);
  font-size: 1.5rem;
  text-decoration: underline;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 1rem;
  object-fit: cover;
`;
const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  :hover {
    backdrop-filter: blur(5px);
    filter: blur(4px);
    transition: 0.2s ease;
  }
  @media (max-width: 926px) {
    padding: 1rem;
  }
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 1rem;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 3rem;
  font-weight: 700;
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
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const Date = styled.div`
  font-size: 1rem;
  font-weight: 200;
  opacity: 0.7;
  margin-bottom: 2rem;
`;

export default PostItem;
