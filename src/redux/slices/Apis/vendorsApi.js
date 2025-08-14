import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const token = localStorage.getItem("access_token");
export const vendorsApi = createApi({
  reducerPath: "vendorsApi",
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

    vendorProductCreate: build.mutation({
      query: (data)=> {
        console.log(data)
        return {
          url: "products/",
          method: 'POST', 
          body: data
        }
      }
    })

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery,useVendorProductCreateMutation } = vendorsApi;
