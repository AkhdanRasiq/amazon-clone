import React from 'react'
import { render } from "@testing-library/react"
import { store } from '../../../src/app/store'
import { Provider } from 'react-redux'

import Checkout from "../../../src/components/Checkout/Checkout"

describe("Checkout.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <Checkout />
      </Provider>
    )
    await expect(wrapper).toMatchSnapshot()
  })
})
