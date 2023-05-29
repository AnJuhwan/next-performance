import path from 'path';
import { promises as fs } from 'fs';

export type Data = {
  id: string;
  name: string;
};

export async function getDatas(): Promise<Data[]> {
  const filePath = path.join(process.cwd(), 'data/example', 'data.json');
  const data = await fs.readFile(filePath, 'utf-8');

  return JSON.parse(data);
}

export async function getData(id: string): Promise<Data | undefined> {
  const products = await getDatas();

  return products.find((item) => item.id === id);
}
