import React from 'react'
import { render } from "@testing-library/react"
import { store } from '../../../src/app/store';
import { Provider } from 'react-redux';

import Product from "../../../src/components/Product/Product"

describe("Product.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <Product 
          a_iId={1}
          a_strTitle='The Test'
          a_iPrice={19.99}
          a_iRating={5}
          a_strImage="www.test.com"
        />
      </Provider>
    )
    await expect(wrapper).toMatchSnapshot()
  })
})
