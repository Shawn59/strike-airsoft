import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Dayjs } from 'dayjs';
import { constants } from '@/constants/constants';

interface RecordSliceState {
  typeGame;
  name: string;
  phone: string;
  countPeople: string;
  rent: 0 | 1 | boolean;
  date?: Dayjs;
  time?: Dayjs;
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
