import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'

import { customerSlice } from './slices/customerSlice';
import { apiSlice } from './slices/apiSlice';

import { vendorsApi } from './slices/Apis/vendorsApi';
import { customersApi } from './slices/Apis/customersApi';
import { dashboardApis } from './slices/Apis/dashboardApis';

export const store = configureStore({
  reducer: {
    customer: customerSlice.reducer,

    // Add reducers for each API slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    [dashboardApis.reducerPath]: dashboardApis.reducer,
    [vendorsApi.reducerPath]: vendorsApi.reducer,
    [customersApi.reducerPath]: customersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(dashboardApis.middleware)
      .concat(vendorsApi.middleware)
      .concat(customersApi.middleware),
});

setupListeners(store.dispatch);