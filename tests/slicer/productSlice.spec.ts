import reducer, { addProduct, removeProduct } from "../../src/features/productSlice"
import { AnyAction } from '@reduxjs/toolkit'

import { productListWithTwoData_mockData } from '../mockData/product_mockData'
import { IProductList } from '../../src/utils/interface'


const testData = productListWithTwoData_mockData

describe("product slice should pass the test", () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(
    {
      productList: []
    })
  })

  it('should handle a product being added to an empty list', () => {
    const previousState: IProductList = {
      productList: []
    }

    expect(reducer(previousState, addProduct(testData[0]))).toEqual({
      productList: [
        { 
          ...testData[0]
        }
      ]
    })
  })

  it('should handle a product qty being added to an existing product', () => {
    const previousState: IProductList = {
      productList: [
        {
          ...testData[0]
        }
      ]
    }

    expect(reducer(previousState, addProduct(testData[0]))).toEqual({
      productList: [
        { 
          ...testData[0],
          qty: 2
        }
      ]
    })
  })

  it('should handle a product qty being reduced to an existing product', () => {
    const previousState: IProductList = {
      productList: [
        {
          ...testData[0],
          qty: 2
        }
      ]
    }

    expect(reducer(previousState, removeProduct({ id:0 }))).toEqual({
      productList: [
        { 
          ...testData[0],
          qty: 1
        }
      ]
    })
  })

  it('should handle a product being added to an existing list', () => {
    const previousState: IProductList = {
      productList: [
        {
          ...testData[0]
        }
      ]
    }

    expect(reducer(previousState, addProduct(testData[1]))).toEqual({
      productList: [
        ...previousState.productList,
        {
          ...testData[1]
        }
      ]
    })
  })

  it('should handle a product being removed from an existing list', () => {
    const previousState: IProductList = {
      productList: [
        {
          ...testData[0]
        },
        {
          ...testData[1]
        }
      ]
    }

    expect(reducer(previousState, removeProduct({ id:0 }))).toEqual({
      productList: [
        { 
          ...testData[1]
        }
      ]
    })
  })
})
