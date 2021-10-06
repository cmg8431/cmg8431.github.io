import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

interface PostItemProps {
  title: string;
  date: string;
  summary: string;
  link: string;
}

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  summary,
}) {
  return (
<<<<<<< HEAD
    <PostItemWrapper>
      <PostItemContent>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <Date>{date}</Date>
      </PostItemContent>
    </PostItemWrapper>
=======
    <li>
      <PostItemWrapper>
        <PostItemContent>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
          <Date>{date}</Date>
        </PostItemContent>
      </PostItemWrapper>
    </li>
>>>>>>> 8874c67... feat: Add Seo component and edit UI
  );
};

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  /* transition: 0.3s box-shadow; */
  transition: color 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
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
  font-size: 2rem;
  font-weight: 700;
`;

const Date = styled.div`
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.7;
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
  font-size: 1rem;
  opacity: 0.8;
`;

export default PostItem;
