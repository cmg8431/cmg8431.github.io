import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { PostFrontmatterType } from 'types/PostItem.types';

type PostItemProps = PostFrontmatterType & { link: string };

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  summary,
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <PostItemContent>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <Date>{date}</Date>
      </PostItemContent>
    </PostItemWrapper>
  );
};

const PostItemWrapper = styled(Link)`
  text-decoration-line: none;
  text-decoration: none;
  border-radius: 1rem;
  color: black;
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
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  opacity: 0.7;
  margin-bottom: 1rem;
`;

const Date = styled.div`
  font-size: 1rem;
  font-weight: 200;
  opacity: 0.7;
  margin-bottom: 2rem;
`;

export default PostItem;
