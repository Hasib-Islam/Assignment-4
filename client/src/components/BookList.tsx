import { useGetBooksQuery, useDeleteBookMutation } from '../redux/api/bookApi';
import { useState } from 'react';
import EditBookForm from './EditBookForm';

const BookList = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  const [editingBook, setEditingBook] = useState<any | null>(null);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this book?'
    );
    if (confirm) await deleteBook(id);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load books.</p>;

  return (
    <div className="p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books?.map((book) => (
          <div
            key={book._id}
            className="border border-gray-500 rounded-md p-4 dark:bg-gray-800 shadow hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-bold mb-5 text-center">{book.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1 font-semibold">
              Author: {book.author}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-1 font-semibold">
              Copies: {book.copies}
            </p>
            <div className="mt-4 flex gap-2">
              <button
                className="bg-yellow-500 text-black px-3 py-1 rounded font-semibold"
                onClick={() => setEditingBook(book)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-3 py-1 rounded font-semibold"
                onClick={() => handleDelete(book._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingBook && (
        <EditBookForm book={editingBook} onClose={() => setEditingBook(null)} />
      )}
    </div>
  );
};

export default BookList;
