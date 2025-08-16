import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const token = localStorage.getItem("access_token");
export const customersApi = createApi({
  reducerPath: "customersApi",
     baseQuery: fetchBaseQuery({
       baseUrl: "http://10.10.13.16:15000/api/",
       prepareHeaders: (headers) => {
         if (token) {
           headers.set("Authorization", `Bearer ${token}`);
         }
         return headers;
       },
     }),
  endpoints: (build) => ({
    getPokemonByName: build.query({
      query: (name) => `pokemon/${name}`,
    }),

    getAllAdminProducts: build.query({
      query: () => 'products/'
    })

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery,useGetAllAdminProductsQuery } = customersApi;
