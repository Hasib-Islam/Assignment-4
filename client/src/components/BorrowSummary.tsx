import { useGetBorrowSummaryQuery } from '../redux/api/borrowApi';
import { CalendarClock } from 'lucide-react';

const BorrowSummary = () => {
  const { data: records, isLoading, isError } = useGetBorrowSummaryQuery();

  if (isLoading) return <p>Loading summary...</p>;
  if (isError) return <p>Failed to load borrow summary.</p>;

  const getDaysLeft = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  };

  return (
    <div className="p-4 max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800 dark:text-white">
        <CalendarClock className="w-6 h-6 text-amber-500" />
        Borrow Records
      </h2>

      <table className="w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">ISBN</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Due Date</th>
            <th className="p-2 border">Days Left</th>
          </tr>
        </thead>
        <tbody>
          {records?.map((item, idx) => {
            const daysLeft = getDaysLeft(item.dueDate);
            return (
              <tr key={idx}>
                <td className="p-2 border">{item.title}</td>
                <td className="p-2 border">{item.isbn}</td>
                <td className="p-2 border">{item.quantity}</td>
                <td className="p-2 border">
                  {new Date(item.dueDate).toLocaleDateString()}
                </td>
                <td className="p-2 border font-semibold">
                  {daysLeft > 0 ? (
                    <span className="text-green-600">
                      In {daysLeft} day{daysLeft > 1 ? 's' : ''}
                    </span>
                  ) : daysLeft === 0 ? (
                    <span className="text-yellow-500">Due today</span>
                  ) : (
                    <span className="text-red-500">
                      Overdue by {Math.abs(daysLeft)} day
                      {Math.abs(daysLeft) > 1 ? 's' : ''}
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummary;
