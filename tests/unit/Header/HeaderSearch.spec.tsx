import React from 'react'
import { render } from "@testing-library/react"

import HeaderSearch from "../../../src/components/Header/HeaderSearch"

describe("HeaderSearch.tsx", () => {
  it("Render Properly", async () => {
    const wrapper = render(
      <HeaderSearch />
    )
    await expect(wrapper).toMatchSnapshot()
  })
})
