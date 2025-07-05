import { BookOpenCheck, BookPlus, Handshake, BarChart3 } from 'lucide-react';

const Home = () => {
  return (
    <div className="text-center mt-10 px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
        Welcome to{' '}
        <span className="text-blue-600 dark:text-blue-400">
          Library Manager
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Your all-in-one digital space to{' '}
        <span className="font-semibold text-blue-500">manage books</span>,
        <span className="font-semibold text-indigo-500"> borrow records</span>,
        and
        <span className="font-semibold text-emerald-500">
          {' '}
          track inventory
        </span>{' '}
        with ease.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="/books"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-md flex items-center gap-2"
        >
          <BookOpenCheck className="w-5 h-5" /> View Books
        </a>
        <a
          href="/add-book"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow-md flex items-center gap-2"
        >
          <BookPlus className="w-5 h-5" /> Add Book
        </a>
        <a
          href="/borrow"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded shadow-md flex items-center gap-2"
        >
          <Handshake className="w-5 h-5" /> Borrow Book
        </a>
        <a
          href="/summary"
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded shadow-md flex items-center gap-2"
        >
          <BarChart3 className="w-5 h-5" /> Summary
        </a>
      </div>
    </div>
  );
};

export default Home;
