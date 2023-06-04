import React from 'react';

const IsrPage = async () => {
  const { data } = await (
    await fetch('https://meowfacts.herokuapp.com', {
      next: { revalidate: 3 },
    })
  ).json();
  const factText = data[0];

  return (
    <>
      <h1>ISR page</h1>
      <article>{factText}</article>
    </>
  );
};

export default IsrPage;
