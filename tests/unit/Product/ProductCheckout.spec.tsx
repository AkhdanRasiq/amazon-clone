import React from 'react'
import { render } from "@testing-library/react"
import { store } from '../../../src/app/store';
import { Provider } from 'react-redux';

import ProductCheckout from "../../../src/components/Product/ProductCheckout"

describe("ProductCheckout.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <ProductCheckout 
          a_iId={1}
          a_strTitle='The Test'
          a_iPrice={19.99}
          a_iRating={5}
          a_strImage="www.test.com"
          a_iQty={1}
        />
      </Provider>
    )
    await expect(wrapper).toMatchSnapshot()
  })
})
