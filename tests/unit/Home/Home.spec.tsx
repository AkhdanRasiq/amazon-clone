import React from 'react'
import { render } from "@testing-library/react"

import Home from "../../../src/components/Home/Home"

describe("Home.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Home />
    )
    await expect(wrapper).toMatchSnapshot()
  })
})
