'use client';

import React, { useEffect, useState } from 'react';

const CsrArticle = () => {
  const [articleText, setArticleText] = useState('');

  useEffect(() => {
    const dataFetch = async () => {
      const { data } = await (
        await fetch('https://meowfacts.herokuapp.com')
      ).json();
      const factText = await data[0];
      setArticleText(factText);
    };

    dataFetch();
  }, []);

  return <article>{articleText}</article>;
};

export default CsrArticle;
