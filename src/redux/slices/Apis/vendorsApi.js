import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const token = localStorage.getItem("access_token");
export const vendorsApi = createApi({
  reducerPath: "vendorsApi",
   baseQuery: fetchBaseQuery({
     baseUrl: "https://c05a898a1689.ngrok-free.app/api/",
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
    }),
    vendorDashboard: build.query({
      query: () => 'vendor/dashboard/'
    })

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery,useVendorProductCreateMutation,
  useVendorDashboardQuery
 } = vendorsApi;
