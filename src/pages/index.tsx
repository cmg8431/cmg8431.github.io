import React, { FunctionComponent } from 'react';
import Text from 'components/Text';
import { Link } from 'gatsby';
import styled from 'styled-components';

const IndexPage: FunctionComponent = () => {
  return (
    <div>
      <Text text="Hello, World!" />
      <Div />
      <Link to="/info/">To Info</Link>
    </div>
  );
};

const Div = styled.div`
  background-color: red;
  width: 1rem;
  height: 1rem;
`;
export default IndexPage;
