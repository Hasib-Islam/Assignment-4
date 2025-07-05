import AddBookForm from '../components/AddBookForm';
import { BookPlus } from 'lucide-react';

const AddBook = () => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-gray-800 dark:text-white">
          <BookPlus className="w-7 h-7 text-green-500" />
          Add a New Book
        </h2>
        <p className="text-gray-300 dark:text-gray-300 mt-1">
          Fill out the form below to add a book to your library.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <AddBookForm />
      </div>
    </section>
  );
};

export default AddBook;
