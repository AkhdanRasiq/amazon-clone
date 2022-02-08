import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

interface ProductState {
  productList: Array<any>
}

const initialState: ProductState = {
  productList: []
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      state.productList.push(action.payload)
    }
  }
})

export const {
  addProduct
} = productSlice.actions

export const selectProductList = (state: RootState) => state.products.productList

export default productSlice.reducer
