import NotFoundPage from '@/app/not-found';
import { getData, getDatas } from '@/services/example';
import React from 'react';

type Props = {
  params: {
    id: string;
    name: string;
  };
};

export const revalidate = 3;

const DynamicId = async ({ params }: Props) => {
  const data = await getData(params.id);

  console.log('data');
  console.log(data);
  if (!data) {
    return <NotFoundPage />;
  }

  return <h1>{data.name}</h1>;
};

export default DynamicId;

export async function generateStaticParams() {
  const dynamicId = await getDatas();
  return dynamicId.map(({ id }) => ({ id }));
}
