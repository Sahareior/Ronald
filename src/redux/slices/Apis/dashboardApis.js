import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const dashboardApis = createApi({
  reducerPath: "dashboardApis",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://10.10.13.16:15000/api/",
    //  http://10.10.13.16:15000/api/admin/customers/4/delete/
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
    getAllProducts : build.query({
      query:()=> 'products/'
    }),

    vendorAcceptProduct: build.mutation({
  query: (id) => ({
    url: `products/${id}/accept/`,
    method: 'POST',
  }),
}),

  getAllVendors: build.query({
    query:() => 'vendors/'
  }),

  getAllCustomers: build.query({
    query: () => 'customers/'
  }),

  deleteCustomers: build.mutation({
    query:(deleteUrl) => (
      {
        url:`${deleteUrl}/`,
        method:'DELETE'
      }
    )
  }),

  getAllOrders: build.query({
    query: () => 'orders/'
  }),

  getAllSellerApplication: build.query({
    query: ()=> 'seller/applications/'
  }),

  acceptSeller: build.mutation({
    query:({id,payload})=>(
      // console.log(id)
      {
      url:`seller/applications/${id}/approve/`,
      method: "POST",
      body:payload
    }
    )
  }),
   acceptProducts: build.mutation({
    query:({id,data})=>{
      console.log(data)
      return{
        url:`products/${id}/accept/`,
        method:"POST",
        body:data
      }
    }
   })


  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery,useGetAllProductsQuery,useVendorAcceptProductMutation,useAcceptSellerMutation,useAcceptProductsMutation,
  useGetAllVendorsQuery, useGetAllCustomersQuery, useDeleteCustomersMutation,useGetAllOrdersQuery, useGetAllSellerApplicationQuery

} = dashboardApis;
