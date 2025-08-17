import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://10.10.13.16:15000/api/",
    prepareHeaders: (headers) => {
         const token = localStorage.getItem("access_token");
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

    getCustomerProducts: build.query({
      query: () => 'products/'
    }),

    addProductToCart: build.mutation({
      query: (data)=>({
        url:'cart/',
        method:"POST",
        body:data
      }) 
    }),

    getAppCart: build.query({
      query: ()=> 'cart/'
    }),

    createOrders: build.mutation({
      query: (data)=> ({
        url:'orders/create-from-cart/',
        method:"POST",
        body:data
      })
    })

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery,useGetCustomerProductsQuery,useAddProductToCartMutation,useGetAppCartQuery,useCreateOrdersMutation } = customersApi;
