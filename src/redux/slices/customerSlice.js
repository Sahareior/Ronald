import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  route: [],
  customerid:null,
  location: null,
  cart: [],
  wishlist: []
}

export const customerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

    addToRoute: (state,action) =>{
      state.route.push(action.payload)
    },
    
    selectedLocation : (state,action) =>{

      console.log(action)
      state.location = action.payload
    },
    addCustomerId: (state,action) => {
      state.customerid = action.payload
    },

addToCart: (state, action) => {
  const itemExists = state.cart.find(item => item.id === action.payload.id);
  if (!itemExists) {
    state.cart.push(action.payload);
  }
},

addToWishList: (state, action) => {
  const itemExists = state.wishlist.find(item => item.id === action.payload.id);
  if (!itemExists) {
    state.wishlist.push(action.payload);
  }
}


  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,addCustomerId, incrementByAmount,selectedLocation,addToCart,addToWishList } = customerSlice.actions

export default customerSlice.reducer