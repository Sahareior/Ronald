import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (build) => ({
    getPokemonByName: build.query({
      query: (name) => `pokemon/${name}`,
    }),
    customerSignup: build.mutation({
      query: (customerData) =>{
        console.log(customerData)

        return{
          url: "/customer/signup",
          method: "POST",
          body: customerData
        }
      }
    }),

    customerLogin: build.mutation({
      query: (customerLogin) => {
        console.log(customerLogin)
        return {
          url: "/customer/login",
          method: "POST",
          body: customerLogin
        }
      }
    }),

    getCustomerProfile: build.query({
      query: (id) => (`/customer/profile/${id}`)
    })

    // cus

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useCustomerSignupMutation,useCustomerLoginMutation, useGetCustomerProfileQuery } = apiSlice;
