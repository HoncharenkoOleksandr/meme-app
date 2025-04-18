import { useDisclosure } from '@heroui/modal';
import { Pagination } from '@heroui/pagination';
import { useState } from 'react';

import EditMemeModal from '../components/EditMemeModal';
import MemeTable from '../components/MemeTable';

import { SetMeme } from '@/hooks/useFetchMemes';
import { Meme } from '@/types';

const ITEMS_PER_PAGE = 10;

interface TablePageProps {
  memes: Meme[];
  setMemes: SetMeme;
}

export default function TablePage({ memes, setMemes }: TablePageProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [edit, setEdit] = useState<Meme | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onEditClickHandler = (meme: Meme) => {
    setEdit(meme);
    onOpen();
  };

  const onSaveClickHandler = (updated: Meme) => {
    const list = memes.map((m) => (m.id === updated.id ? updated : m));

    localStorage.setItem('memes', JSON.stringify(list));
    setMemes(list);
    setEdit(null);
  };

  const totalPages = Math.ceil(memes.length / ITEMS_PER_PAGE);
  const currentMemes = memes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="overflow-hidden flex flex-col gap-2">
      <MemeTable memes={currentMemes} onEdit={onEditClickHandler} />
      {edit && (
        <EditMemeModal
          isOpen={isOpen}
          meme={edit}
          onClose={() => setEdit(null)}
          onOpenChange={onOpenChange}
          onSave={onSaveClickHandler}
        />
      )}
      <div className="flex justify-center items-center">
        <Pagination
          initialPage={1}
          total={totalPages}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
