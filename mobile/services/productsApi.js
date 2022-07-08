import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1/product/'
  }),
  endpoints: (builder) => ({
    getAll: builder.mutation({
      query: (token) => {
        return {
          url: '/',
          method: 'GET',
		  headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    postAll: builder.mutation({
      query: (product) => {
        return {
          url: '/',
          method: 'POST',
          body: product,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    getLoggedUser: builder.query({
      query: (token) => ({
        url: 'loggeduser',
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`,
        },
      })
    })
  }),
})

export const { useGetAllMutation,usePostAllMutation,useGetLoggedUserQuery } = productsApi