import React from 'react'
import { render } from "@testing-library/react"

import Header from "../../../src/components/Header/Header"

describe("Header.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <Header />
    )
    await expect(wrapper).toMatchSnapshot()
  })
})
