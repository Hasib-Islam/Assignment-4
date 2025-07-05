import BorrowSummary from '../components/BorrowSummary';
import { BarChart3 } from 'lucide-react';

const Summary = () => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-gray-800 dark:text-white">
          <BarChart3 className="w-7 h-7 text-amber-500" />
          Borrow Summary
        </h2>
        <p className="text-gray-300 dark:text-gray-300 mt-1">
          See a summary of all borrowed books and quantities.
        </p>
      </div>

      <BorrowSummary />
    </section>
  );
};

export default Summary;
