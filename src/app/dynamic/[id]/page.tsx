import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

const DynamicId = ({ params }: Props) => {
  return <h1>{params.id}</h1>;
};

export default DynamicId;

export function generateStaticParams() {
  const dynamicId = ['0531', '0313'];
  return dynamicId.map((item) => ({ id: item }));
}
