import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded font-medium transition-all duration-200 ${
      isActive
        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
    }`;

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-b-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Library Manager
        </NavLink>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/books" className={linkClass}>
            Books
          </NavLink>
          <NavLink to="/add-book" className={linkClass}>
            Add
          </NavLink>
          <NavLink to="/borrow" className={linkClass}>
            Borrow
          </NavLink>
          <NavLink to="/summary" className={linkClass}>
            Summary
          </NavLink>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Books
          </NavLink>
          <NavLink
            to="/add-book"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Add
          </NavLink>
          <NavLink
            to="/borrow"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Borrow
          </NavLink>
          <NavLink
            to="/summary"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Summary
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
