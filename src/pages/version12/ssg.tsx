import CsrArticle from '@/components/csr/CsrArticle';
import { getDatas } from '@/services/example';
import React from 'react';

type SsgData = {
  id: string;
  name: string;
};

type Props = {
  ssgData: SsgData[];
};

const Version12Ssg = ({ ssgData }: Props) => {
  return (
    <>
      <h1> Version12 SSG Page</h1>
      <ul>
        {ssgData.map((item) => (
          <li key={item.id}> {item.name}</li>
        ))}
      </ul>
      <CsrArticle />
    </>
  );
};

export async function getStaticProps() {
  const ssgData = await getDatas();
  return {
    props: { ssgData },
  };
}

export default Version12Ssg;
