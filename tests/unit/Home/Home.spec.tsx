import React from 'react'
import { render } from "@testing-library/react"
import { store } from '../../../src/app/store';
import { Provider } from 'react-redux';

import Home from "../../../src/components/Home/Home"

describe("Home.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    await expect(wrapper).toMatchSnapshot()
  })
})
