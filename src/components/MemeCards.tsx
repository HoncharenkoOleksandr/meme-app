import { Button } from '@heroui/button';
import { Card, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';

import { Meme } from '@/types';

export default function MemeCards({ memes }: { memes: Meme[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 @min-[1000px]:grid-cols-2 md:grid-cols-4 gap-2">
      {memes.map((m) => (
        <Card key={m.id} isFooterBlurred className="border-none" radius="lg">
          <div className="relative w-full flex justify-center items-center">
            <Image
              alt={m.name}
              className="max-w-full h-full min-h-[500px] max-h-[300px] object-fill"
              src={m.image}
            />
          </div>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <h3 className="font-semibold mb-2">{m.name}</h3>
            <small className="text-default-500">Likes: {m.likes}</small>
            <Button
              className="text-tiny text-white bg-black/20"
              color="default"
              radius="lg"
              size="sm"
              variant="flat"
            >
              <a href={m.image} rel="noreferrer" target="_blank">
                View
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
