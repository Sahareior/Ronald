import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { data } from "react-router-dom";

// Get token from localStorage
const token = localStorage.getItem("access_token");

export const apiSlice = createApi({
  reducerPath: "apiSlice",
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
    customerSignup: build.mutation({
      query: (customerData) => ({
        url: "signup/customer/",
        method: "POST",
        body: customerData,
      }),
    }),
    customerLogin: build.mutation({
      query: (customerLogin) => ({
        url: "login/",
        method: "POST",
        body: customerLogin,
      }),
    }),
    getCustomerProfile: build.query({
      query: (id) => `customer/profile/${id}`, // token will be sent automatically
    }),

postSeller: build.mutation({
  query: (data) => ({
    url: "seller/apply/",
    method: "POST",
    body: data,           // this should be FormData
    // Important: fetchBaseQuery sets headers automatically for FormData
  })
}),

vendorApprove: build.query({
  query: () => 'seller/applications/'
}),

sellerApprove: build.mutation({
  query: (id) => {
    return{
      url: `seller/applications/${id}/approve/`,
      method: "POST",
      body: id
    }
  }
})

// seller/applications/2/approve/

  }),
});

export const {
  useGetPokemonByNameQuery,
  useCustomerSignupMutation,
  useCustomerLoginMutation,
  useGetCustomerProfileQuery,
  usePostSellerMutation,
  useVendorApproveQuery,
  useSellerApproveMutation
} = apiSlice;
