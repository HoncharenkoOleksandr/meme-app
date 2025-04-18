import MemeCards from '../components/MemeCards';

import { Meme } from '@/types';

interface ListPageProps {
  memes: Meme[];
}

export default function ListPage({ memes }: ListPageProps) {
  return <MemeCards memes={memes} />;
}
