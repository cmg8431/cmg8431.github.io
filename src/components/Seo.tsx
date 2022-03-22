import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../assets/png/Logo.png';

interface Props {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

export default function SEO({
  description = '',
  lang = 'ko',
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
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
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
        {
          name: 'google-site-verification',
          content: 'u2qanESU0vG-gmAYFlZXjlx0x43q-QR1h2VCKYxjmHI',
        },
        {
          name: 'naver-site-verification',
          content: '0191c22b01465724746a94eb6aa2270d5205d4ec',
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
