import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type Job } from '../shared'


export const trabajaYa = createApi({
  reducerPath: 'trabajaYa',
  tagTypes: ['jobs'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    getJobs: build.query<Job[], void>({
      query: () => '/jobs',
      keepUnusedDataFor: 5
    })
  })
})

export const { useGetJobsQuery } = trabajaYa
