import { useState } from 'react';
import { useGetBooksQuery } from '../redux/api/bookApi';
import { useBorrowBookMutation } from '../redux/api/borrowApi';

const BorrowForm = () => {
  const { data: books } = useGetBooksQuery();
  const [borrowBook] = useBorrowBookMutation();

  const [formData, setFormData] = useState({
    book: '',
    quantity: 1,
    dueDate: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'quantity' ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await borrowBook(formData).unwrap();
      alert('Book borrowed successfully!');
      setFormData({ book: '', quantity: 1, dueDate: '' });
    } catch (err) {
      alert('Failed to borrow book.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-lg max-w-md mx-auto mt-6 space-y-3"
    >
      <select
        name="book"
        value={formData.book}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded text-black"
        required
      >
        <option value="">-- Select Book --</option>
        {books?.map((book) => (
          <option key={book._id} value={book._id}>
            {book.title} ({book.copies} copies)
          </option>
        ))}
      </select>

      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        placeholder="Quantity"
        className="w-full border px-3 py-2 rounded text-black outline-none"
        min={1}
        required
      />

      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded text-black outline-none"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Borrow Book
      </button>
    </form>
  );
};

export default BorrowForm;
