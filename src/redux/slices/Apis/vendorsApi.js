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
    }),
    vendorDashboard: build.query({
      query: () => 'vendor/dashboard/'
    }),

    vendorOverview: build.query({
      query: ()=> 'vendor/sales-overview/'
    }),

    vendorSellsPerfomence: build.query({
      query: () => 'vendor/sales-performance/'
    }),

    getTopSells: build.query({
      query: ()=> 'top-sell-products/'
    }),

    getVendorOrders: build.query({
      query: ()=> 'vendor/order/list/'
    }),

    createPromotion: build.mutation({
      query:(data)=> {
        console.log(data)
        return{
          url: "promotions/",
          method: "POST",
          body: data
        }
      }
    }),

    getVendorPayout: build.query({
      query: ()=> 'payouts/'
    }),

    getPromotion: build.query({
      query: () => 'promotions/'
    }),

    getVendorProductById: build.query({
      query: () => `vendor/products/`
    }),

    getAllProducts: build.query({
      query: () => 'products/'
    }),

    getVendorPaymentStat: build.query({
      query: ()=> 'vendor/payments-stats/'
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery,useVendorProductCreateMutation, useGetVendorProductByIdQuery,useGetAllProductsQuery, useGetVendorPaymentStatQuery,useGetVendorPayoutQuery,
  useVendorDashboardQuery,useVendorOverviewQuery,useGetTopSellsQuery, useGetVendorOrdersQuery, useCreatePromotionMutation,useGetPromotionQuery, useVendorSellsPerfomenceQuery
 } = vendorsApi;
