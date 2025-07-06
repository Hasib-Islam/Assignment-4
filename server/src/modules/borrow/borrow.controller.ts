import { Request, Response } from 'express';
import { Borrow } from './borrow.model';
import { Book } from '../book/book.model';

export const borrowBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { book: bookId, quantity, dueDate } = req.body;

    const book = await Book.findById(bookId);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }

    if (book.copies < quantity) {
      res.status(400).json({ message: 'Not enough copies available' });
      return;
    }

    const borrow = await Borrow.create({ book: bookId, quantity, dueDate });

    book.copies -= quantity;
    if (book.copies <= 0) {
      book.available = false;
    }
    await book.save();

    res.status(201).json(borrow);
  } catch (err) {
    res.status(500).json({ message: 'Failed to borrow book', error: err });
  }
};

export const getBorrowSummary = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const records = await Borrow.find().populate('book');

    const formatted = records
      .filter((borrow) => borrow.book && typeof borrow.book === 'object')
      .map((borrow) => {
        const book = borrow.book as any;
        return {
          title: book?.title || 'Unknown Title',
          isbn: book?.isbn || 'Unknown ISBN',
          quantity: borrow.quantity,
          dueDate: borrow.dueDate,
        };
      });

    res.status(200).json(formatted);
  } catch (err) {
    console.error(
      'Borrow Summary Error:',
      err instanceof Error ? err.message : err
    );
    res.status(500).json({
      message: 'Failed to fetch borrow records',
      error: err instanceof Error ? err.message : JSON.stringify(err),
    });
  }
};
