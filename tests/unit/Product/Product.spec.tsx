import React from 'react'
import { render } from "@testing-library/react"
import { store } from '../../../src/app/store'
import { Provider } from 'react-redux'
import { productListWithTwoData_mockData } from '../../mockData/product_mockData'
import * as hooks from '../../../src/app/hooks'

import Product from "../../../src/components/Product/Product"


const testData = productListWithTwoData_mockData

describe("Product.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Provider store ={store}>
        <Product 
          a_iId       ={testData[0].id}
          a_strTitle  ={testData[0].title}
          a_iPrice    ={testData[0].price}
          a_iRating   ={testData[0].rating}
          a_strImage  ={testData[0].image}
        />
      </Provider>
    )
    await expect(wrapper).toMatchSnapshot()
  })

  it("should handle add product to the basket", () => {
    const useDispatchSpy = jest.spyOn(hooks, 'useAppDispatch')
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn)

    const { container } = render(
      <Provider store ={store}>
        <Product 
          a_iId       ={testData[0].id}
          a_strTitle  ={testData[0].title}
          a_iPrice    ={testData[0].price}
          a_iRating   ={testData[0].rating}
          a_strImage  ={testData[0].image}
        />
      </Provider>
    )

    const addButton: HTMLElement  = container.querySelector('#btnAddToBasket') as HTMLElement
    addButton.click()

    expect(mockDispatchFn.mock.calls[0][0].payload).toStrictEqual(testData[0])
    expect(mockDispatchFn.mock.calls[1][0].payload).toStrictEqual({ status: true })
  })

})
