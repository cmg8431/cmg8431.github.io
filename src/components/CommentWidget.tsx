import React, { createRef, FunctionComponent, useEffect } from 'react';

const src = 'http://mingi.tech/';
<<<<<<< HEAD
const repo = 'cmg8431/cmg8431.github.io';
=======
const repo = 'cmg8431/cmg8431.github.io'; // 자신 계정의 레포지토리로 설정
>>>>>>> 107c7822065757579e3c47fc70f4ea21813577d2

type UtterancesAttributesType = {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
};

<<<<<<< HEAD
const CommentWidget: FunctionComponent = () => {
=======
const CommentWidget: FunctionComponent = function () {
>>>>>>> 107c7822065757579e3c47fc70f4ea21813577d2
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null) return;
<<<<<<< HEAD
    const utterances: HTMLScriptElement = document.createElement('script');
=======

    const utterances: HTMLScriptElement = document.createElement('script');

>>>>>>> 107c7822065757579e3c47fc70f4ea21813577d2
    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, []);

  return <div ref={element} />;
};

export default CommentWidget;
