import BookList from '../components/BookList';
import { BookOpen } from 'lucide-react';

const AllBooks = () => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-gray-800 dark:text-white">
          <BookOpen className="w-7 h-7 text-blue-500" />
          All Books
        </h2>
        <p className="text-gray-300 dark:text-gray-300 mt-1">
          Browse all available books in the system.
        </p>
      </div>

      <BookList />
    </section>
  );
};

export default AllBooks;
