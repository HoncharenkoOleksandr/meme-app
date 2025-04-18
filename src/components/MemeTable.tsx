import { Button } from '@heroui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/table';

import { Meme } from '@/types';

interface MemeTableProps {
  memes: Meme[];
  onEdit: (id: Meme) => void;
}

export default function MemeTable({ memes, onEdit }: MemeTableProps) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Likes</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {memes.map((m) => (
          <TableRow key={m.id}>
            <TableCell>{m.id}</TableCell>
            <TableCell>{m.name}</TableCell>
            <TableCell>{m.likes}</TableCell>
            <TableCell>
              <Button onPress={() => onEdit(m)}>Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
