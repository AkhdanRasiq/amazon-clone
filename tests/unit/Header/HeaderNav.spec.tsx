import React from 'react'
import { render } from "@testing-library/react"
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { store } from '../../../src/app/store';
import { Provider } from 'react-redux';

import HeaderNav from "../../../src/components/Header/HeaderNav"

describe("HeaderNav.tsx", () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });

  it("Render Properly", async () => {
    const wrapper = render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <HeaderNav />
        </Provider>
      </Router>
    )
    await expect(wrapper).toMatchSnapshot()
  })

  it('Routing Checkout', () => {
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <HeaderNav />
        </Provider>
      </Router>
    );
    expect(history.location.pathname).toBe('/');

    const btnCheckout: HTMLElement  = container.querySelector('.headerNavOptionBasket') as HTMLElement
    btnCheckout.click()
    expect(history.location.pathname).toBe('/checkout')
  })
})
