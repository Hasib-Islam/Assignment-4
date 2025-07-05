import express from 'express';
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} from './book.controller';

const router = express.Router();

router.post('/', createBook);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
