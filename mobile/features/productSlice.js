import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  name: "",
  description: "",
  price: 0,
  imageUrl: "",					
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductInfo: (state, action) => {
      state.description = action.payload.description
      state.name = action.payload.name
	  state.price = action.payload.price
	  state.imageUrl = action.payload.imageUrl	
    },
    unSetProductInfo: (state, action) => {
		state.description = action.payload.description
		state.name = action.payload.name
		state.price = action.payload.price
		state.imageUrl = action.payload.imageUrl	
    },
  }
})

export const { setProductInfo,unSetProductInfo} = productSlice.actions
export default productSlice.reducer