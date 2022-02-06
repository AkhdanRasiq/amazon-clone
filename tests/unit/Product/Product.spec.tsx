import React from 'react'
import { render } from "@testing-library/react"

import Product from "../../../src/components/Product/Product"

describe("Product.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Product 
        a_strId="1"
        a_strTitle='The Test'
        a_iPrice={19.99}
        a_iRating={5}
        a_strImage="www.test.com"
      />
    )
    await expect(wrapper).toMatchSnapshot()
  })
})
