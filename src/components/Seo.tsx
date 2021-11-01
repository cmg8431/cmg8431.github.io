import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../assets/img/Logo.png';

interface Props {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

export default function SEO({
  description = '',
  lang = 'en',
  meta = [],
  title,
}: Props): ReactElement {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
        },
      ].concat(meta)}
      link={[
        {
          rel: 'shortcut icon',
          href: Icon,
        },
      ]}
    />
  );
}
