import { useState } from 'react';
import { useAddBookMutation } from '../redux/api/bookApi';

const AddBookForm = () => {
  const [addBook] = useAddBookMutation();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    isbn: '',
    description: '',
    copies: 1,
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
    try {
      await addBook(formData).unwrap();
      alert('Book added successfully!');
      setFormData({
        title: '',
        author: '',
        genre: '',
        isbn: '',
        description: '',
        copies: 1,
      });
    } catch (err) {
      alert('Failed to add book.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 space-y-4 p-6 rounded-lg border border-lg border-gray-500"
    >
      {['title', 'author', 'genre', 'isbn'].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={formData[field as keyof typeof formData]}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded outline-none text-black text-lg"
          required
        />
      ))}

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded outline-none text-black"
      />

      <input
        type="number"
        name="copies"
        placeholder="Copies"
        value={formData.copies}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded outline-none text-black"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
