import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllBooks from './pages/AllBooks';
import AddBook from './pages/AddBook';
import Borrow from './pages/Borrow';
import Summary from './pages/Summary';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<AllBooks />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
