import { Button } from '@heroui/button';
import { Form } from '@heroui/form'; // Assuming there's a form component
import { Input } from '@heroui/input';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/modal';
import { useEffect, useState } from 'react';

import { Meme } from '@/types';

interface EditMemeModalProps {
  meme: Meme;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: Meme) => void;
  onOpenChange: () => void;
}

export default function EditMemeModal({
  meme,
  isOpen,
  onClose,
  onOpenChange,
  onSave,
}: EditMemeModalProps) {
  const [form, setForm] = useState<Meme>(meme);

  useEffect(() => setForm(meme), [meme]);

  if (!isOpen) return null;

  const validateImageUrl = (value: string) => {
    try {
      new URL(value);

      return value.endsWith('.jpg') ? null : 'Image URL must end with .jpg';
    } catch {
      return 'Invalid URL';
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Edit Meme"
      onClose={onClose}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">Edit Meme</ModalHeader>
            <ModalBody>
              <Form
                id="edit"
                validationBehavior="native"
                onSubmit={() => onSave(form)}
              >
                <Input disabled label="ID" value={form.id.toString()} />
                <Input
                  isRequired
                  label="Name"
                  maxLength={100}
                  minLength={3}
                  validate={(value) => {
                    if (value.length < 3) {
                      return 'Name must be at least 3 characters long';
                    }

                    return null;
                  }}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Input
                  isRequired
                  label="Image URL"
                  validate={validateImageUrl}
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                />
                <Input
                  isRequired
                  label="Likes"
                  max={99}
                  min={0}
                  type="number"
                  value={form.likes.toString()}
                  onChange={(e) =>
                    setForm({ ...form, likes: Number(e.target.value) })
                  }
                />
                <ModalFooter>
                  <Button onPress={onClose}>Cancel</Button>
                  <Button color="primary" form="edit" type="submit">
                    Save
                  </Button>
                </ModalFooter>
              </Form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
