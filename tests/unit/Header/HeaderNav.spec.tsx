import React from 'react'
import { render } from "@testing-library/react"

import HeaderNav from "../../../src/components/Header/HeaderNav"

describe("HeaderNav.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <HeaderNav />
    )
    await expect(wrapper).toMatchSnapshot()
  })
})
