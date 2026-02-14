import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
    endpoints: builder => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
})

export const {
    useLoginMutation,
} = usersApi
