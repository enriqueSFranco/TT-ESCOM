import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Job } from '../shared'

type JobTitle = Pick<Job, 'title'>

export const jobApi = createApi({
  reducerPath: 'trabajaYa',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getJobByName: builder.query<Job, JobTitle>({
      query: (name) => `jobs/${name}`
    })
  })
})

export const { } = jobApi