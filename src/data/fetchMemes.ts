import { Meme } from '@/types';

const MEME_API_URL = 'https://meme-api.com/gimme';

export async function fetchMemes(count = 100): Promise<Meme[]> {
  const res = await fetch(`${MEME_API_URL}/${count}`);
  const data = await res.json();

  return data.memes.map((m: any, idx: number) => ({
    id: idx + 1,
    name: m.author,
    image: m.url,
    likes: m.ups,
  }));
}
