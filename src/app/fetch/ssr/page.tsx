import React from 'react';

const SsrPage = async () => {
  const { data } = await (
    await fetch('https://meowfacts.herokuapp.com', {
      next: { revalidate: 0 },
    })
  ).json();
  const factText = data[0];

  return (
    <>
      <h1>SSR Page</h1>
      <article>asdf</article>
    </>
  );
};

export default SsrPage;
