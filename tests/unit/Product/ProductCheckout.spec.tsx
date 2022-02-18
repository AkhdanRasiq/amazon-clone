import React from 'react'
import { render } from "@testing-library/react"
import { store } from '../../../src/app/store'
import { Provider } from 'react-redux'
import { productListWithData_mockData } from '../../mockData/product_mockData'
import * as hooks from '../../../src/app/hooks'

import ProductCheckout from "../../../src/components/Product/ProductCheckout"


const testData = productListWithData_mockData.productList

describe("ProductCheckout.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <ProductCheckout 
          a_iId       ={testData[0].id}
          a_strTitle  ={testData[0].title}
          a_iPrice    ={testData[0].price}
          a_iRating   ={testData[0].rating}
          a_strImage  ={testData[0].image}
          a_iQty      ={testData[0].qty}
        />
      </Provider>
    )
    await expect(wrapper).toMatchSnapshot()
  })

  it("should handle add and remove product from the basket", async () => {
    const useDispatchSpy = jest.spyOn(hooks, 'useAppDispatch')
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn)



    const { container } = render(
      <Provider store ={store}>
        <ProductCheckout 
          a_iId       ={testData[0].id}
          a_strTitle  ={testData[0].title}
          a_iPrice    ={testData[0].price}
          a_iRating   ={testData[0].rating}
          a_strImage  ={testData[0].image}
          a_iQty      ={testData[0].qty}
        />
      </Provider>
    )

    const addButton: HTMLElement  = container.querySelector('#btnAddProduct') as HTMLElement
    addButton.click()
    await expect(mockDispatchFn).toHaveBeenCalled()
    await expect(mockDispatchFn).toHaveBeenCalledWith(mockDispatchFn.mock.calls[0][0])

    useDispatchSpy.mockClear()

    const removeButton: HTMLElement  = container.querySelector('#btnRemoveProduct') as HTMLElement
    removeButton.click()
    await expect(mockDispatchFn).toHaveBeenCalled()
    await expect(mockDispatchFn).toHaveBeenCalledWith(mockDispatchFn.mock.calls[0][0])

    useDispatchSpy.mockClear()
  })
})
