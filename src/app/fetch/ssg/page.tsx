import React from 'react';

const SsgPage = async () => {
  const { data } = await (
    await fetch('https://meowfacts.herokuapp.com')
  ).json();
  const factText = data[0];

  return (
    <>
      <h1>SSG page</h1>
      <article>{factText}</article>
    </>
  );
};

export default SsgPage;
