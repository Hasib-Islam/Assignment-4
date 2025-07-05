import { Request, Response } from 'express';
import { Book } from './book.model';

export const createBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create book', error: err });
  }
};

export const getBooks = async (_req: Request, res: Response): Promise<void> => {
  const books = await Book.find();
  res.status(200).json(books);
};

export const getBookById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }
  res.status(200).json(book);
};

export const updateBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!book) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }
  res.status(200).json(book);
};

export const deleteBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }
  res.status(200).json({ message: 'Book deleted successfully' });
};
