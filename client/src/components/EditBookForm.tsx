import { useState } from 'react';
import { useUpdateBookMutation } from '../redux/api/bookApi';

interface EditBookFormProps {
  book: any;
  onClose: () => void;
}

const EditBookForm = ({ book, onClose }: EditBookFormProps) => {
  const [updateBook] = useUpdateBookMutation();
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    genre: book.genre,
    isbn: book.isbn,
    description: book.description,
    copies: book.copies,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'copies' ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateBook({ id: book._id, data: formData });
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 border border-gray-500 p-4 rounded mt-4"
    >
      <h3 className="text-lg font-semibold">Edit Book</h3>

      {['title', 'author', 'genre', 'isbn'].map((field) => (
        <input
          key={field}
          name={field}
          value={formData[field as keyof typeof formData]}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded outline-none text-black"
          placeholder={field}
          required
        />
      ))}

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border px-3 py-2 rounded outline-none text-black"
      />

      <input
        type="number"
        name="copies"
        value={formData.copies}
        onChange={handleChange}
        placeholder="Copies"
        className="w-full border px-3 py-2 rounded outline-none text-black"
        required
      />

      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-400 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditBookForm;
