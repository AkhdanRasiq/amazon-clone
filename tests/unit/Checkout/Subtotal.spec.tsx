import React from 'react'
import { render } from "@testing-library/react"
import { store } from '../../../src/app/store'
import { Provider } from 'react-redux'

import Subtotal from "../../../src/components/Checkout/Subtotal"
import reducer, { addProduct } from "../../../src/features/productSlice"
import { AnyAction } from '@reduxjs/toolkit'

interface IProduct {
  id      : number,
  title   : string,
  price   : number,
  rating  : number,
  image   : string,
  qty     : number  
}

interface IProductList {
  productList: Array<IProduct>
}

describe("Subtotal.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <Subtotal />
      </Provider>
    )
    await expect(wrapper).toMatchSnapshot()
  })

  it('should return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(
    {
      productList: []
    })
  })

  it('should handle a todo being added to an empty list', () => {
    const previousState: IProductList = {
      productList: []
    }

    const data = {
      id      : 1,
      title   : "Test",
      price   : 19.99,
      rating  : 5,
      image   : "www.test.com",
      qty     : 1
    }

    expect(reducer(previousState, addProduct(data))).toEqual({
      productList: [
      { 
        ...data
      }]
    })
  })
})
