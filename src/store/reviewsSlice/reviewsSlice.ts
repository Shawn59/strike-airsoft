import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from '@/constants/constants';

//const KEY = 'e30edc8aaa8d8ce261647db5fd7ff22e';
const KEY = '6f2109bb617397d6ec3e05d2caee6873';

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
    [KEY]: {
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

//TODO: переделать на серверный запрос с кешем
export const reviewsSlice = createApi({
  reducerPath: constants.REDUX_SLICE.reviewsSlice,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.smartwidgets.ru',
  }),
  keepUnusedDataFor: 3000,
  endpoints: (build) => ({
    fetchReviews: build.query<IReviewerData[], void>({
      query: () => ({
        url: '/',
        body: {
          key: [KEY],
        },
        method: 'post',
      }),
      transformResponse: (response: IReviewerResponse) => {
        const { [KEY]: commentData } = response?.data;

        return commentData?.items
          ? commentData.items.slice(0, 20).map((item) => ({
              id: item.id,
              rating: item.rating,
              text: item.text,
              authorName: item.author_name,
              img: item.author_img,
              from: item.from,
            }))
          : [];
      },
    }),
  }),
});

export const { useFetchReviewsQuery } = reviewsSlice;
export default reviewsSlice.reducer;
