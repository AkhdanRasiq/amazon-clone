import React from 'react'
import { render } from "@testing-library/react"
import { store } from '../../../src/app/store'
import { Provider } from 'react-redux'

import Subtotal from "../../../src/components/Checkout/Subtotal"
import { productListWithData_mockData } from '../../mockData/product_mockData'


describe("Subtotal.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <Subtotal />
      </Provider>
    )
    await expect(wrapper).toMatchSnapshot()
  })
  
  it('subtotal should calculate data passed from redux', () => {
    const { container } = render(
      <Provider store={store}>
        <Subtotal />
      </Provider>
    )

    const subtotalDetail: HTMLElement  = container.querySelector('#detailTotal') as HTMLElement
    const productData = productListWithData_mockData.productList[0]

    expect(subtotalDetail.innerHTML)
    .toBe(`Subtotal (${productData.qty} Items):<strong>$${productData.price * productData.qty}</strong>`)
  })
})
