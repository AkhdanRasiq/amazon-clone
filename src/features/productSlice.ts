import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';
import { IProductList } from '../utils/interface'

const initialState: IProductList = {
  productList: []
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      const sameItem = state.productList.findIndex(item => item.id === action.payload.id)

      if(sameItem !== -1)
        state.productList[sameItem].qty += 1
      else
        state.productList.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<any>) => {
      const indexProduct = state.productList.findIndex(item => item.id === action.payload.id)

      if(state.productList[indexProduct].qty > 0)
        state.productList[indexProduct].qty -= 1
        
      if(state.productList[indexProduct].qty === 0)
        state.productList.splice(indexProduct, 1)
    }
  }
})

export const {
  addProduct,
  removeProduct
} = productSlice.actions

export const selectProductList = (state: RootState) => state.products.productList

export default productSlice.reducer
