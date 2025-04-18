import { useEffect, useState } from 'react';

import { fetchMemes } from '../data/fetchMemes';

import { Meme } from '@/types';

export type SetMeme = React.Dispatch<React.SetStateAction<Meme[]>>;

export function useFetchMemes(): [Meme[], SetMeme, boolean, string | null] {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('memes');

    if (stored) {
      setMemes(JSON.parse(stored));
      setLoading(false);
    } else {
      fetchMemes()
        .then((fetchedMemes) => {
          setMemes(fetchedMemes);
          localStorage.setItem('memes', JSON.stringify(fetchedMemes));
        })
        .catch((err) => {
          setError('Failed to fetch memes with error: ' + err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return [memes, setMemes, loading, error];
}
