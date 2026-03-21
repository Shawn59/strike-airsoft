import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from '@/constants/constants';

export interface IReviewerData {
  id: string;
  rating: number;
  text: string;
  authorName: string;
  img: string;
  from: '2GIS' | 'Яндекс Карты';
}

interface IReviewerResponse {
  data: {
    e30edc8aaa8d8ce261647db5fd7ff22e: {
      items: {
        id: string;
        rating: number;
        text: string;
        author_name: string;
        author_img: string;
        from: '2GIS' | 'Яндекс Карты';
      }[];
    };
  };
}

export const reviewsSlice = createApi({
  reducerPath: constants.REDUX_SLICE.reviewsSlice,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.smartwidgets.ru',
  }),
  endpoints: (build) => ({
    fetchReviews: build.mutation<IReviewerData[], void>({
      query: () => ({
        url: '/',
        body: {
          key: process.env.NEXT_PUBLIC_SMARTWIDGETS_API_KEY,
        },
        method: 'post',
      }),
      transformResponse: (response: IReviewerResponse) => {
        return response.data.e30edc8aaa8d8ce261647db5fd7ff22e.items.slice(0, 20).map((item) => ({
          id: item.id,
          rating: item.rating,
          text: item.text,
          authorName: item.author_name,
          img: item.author_img,
          from: item.from,
        }));
      },
    }),
  }),
});

export const { useFetchReviewsMutation } = reviewsSlice;
export default reviewsSlice.reducer;
