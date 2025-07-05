import BorrowForm from '../components/BorrowForm';
import { Handshake } from 'lucide-react';

const Borrow = () => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-gray-800 dark:text-white">
          <Handshake className="w-7 h-7 text-indigo-500" />
          Borrow a Book
        </h2>
        <p className="text-gray-300 dark:text-gray-300 mt-1">
          Select a book, quantity, and due date to borrow it.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <BorrowForm />
      </div>
    </section>
  );
};

export default Borrow;
