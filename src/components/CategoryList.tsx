import { Link } from 'gatsby';
import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

export interface CategoryListProps {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

interface CategoryItemProps {
  active: boolean;
}

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps;

const CategoryList: FunctionComponent<CategoryListProps> = ({
  selectedCategory,
  categoryList,
}) => {
  return (
    <CategoryListWrapper>
      <Ul>
        {Object.entries(categoryList).map(([name, count]) => (
          <Li>
            <CategoryItem
              to={`/?category=${name}`}
              active={name === selectedCategory}
              key={name}
            >
              #{name}({count})
            </CategoryItem>
          </Li>
        ))}
      </Ul>
    </CategoryListWrapper>
  );
};

const CategoryListWrapper = styled.nav`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Ul = styled.ul`
  max-width: 83rem;
  width: 100%;
  margin: auto;
  list-style: none;
  @media (max-width: 425px) {
    white-space: nowrap;
    overflow: auto;
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
`;

const Li = styled.li`
  height: 1.5rem;
  margin: 0px 1rem 1rem 0px;
  padding: 0.0625rem 0.4375rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
`;

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '500' : '300')};
  cursor: pointer;
  color: white;
  font-size: 0.8rem;
  background-color: #111114;
  padding: 0.5rem;
  border-radius: 0.3rem;
  text-decoration: none;
  &:last-of-type {
    margin-right: 0;
  }
`;

export default CategoryList;
