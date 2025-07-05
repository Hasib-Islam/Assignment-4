import { apiSlice } from './apiSlice';

export const borrowApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    borrowBook: builder.mutation<
      any,
      { book: string; quantity: number; dueDate: string }
    >({
      query: (data) => ({
        url: '/borrow',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    getBorrowSummary: builder.query<any[], void>({
      query: () => '/borrow/summary',
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
