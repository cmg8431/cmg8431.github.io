import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
  title: string;
}

const Seo: FunctionComponent<SeoProps> = ({ title }) => {
  return (
    <Helmet title={title}>
      <meta charSet="utf-8" />
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  );
};

export default Seo;
