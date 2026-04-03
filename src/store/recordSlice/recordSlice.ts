import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from '@/constants/constants';

export interface RecordSliceState {
  typeGame: 'free' | 'friend';
  name: string;
  phone: string;
  countPeople: number;
  rent?: boolean;
  /** DD.MM.YYYY */
  date?: string;
  /** HH:mm */
  time?: string;
}

export const recordSlice = createApi({
  reducerPath: constants.REDUX_SLICE.recordSlice,
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/record',
  }),
  endpoints: (build) => ({
    fetchRecord: build.mutation({
      async queryFn(_arg: RecordSliceState, _queryApi, _extraOptions, baseQuery) {
        console.log('_arg = ', _arg);
        const resultData = { ..._arg };

        /* const asyncData = await getAsyncData({ name, data });*/

        return baseQuery({
          url: '',
          body: {
            data: {
              ...resultData,
              /* time: asyncData.time && `${asyncData.time.format('HH')}:00`,
              date: asyncData.date && asyncData.date.format('DD.MM.YYYY'),*/
            },
          },
          method: 'POST',
        });
      },
    }),
  }),
});

export const { useFetchRecordMutation } = recordSlice;
