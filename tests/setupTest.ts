import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'

import { productListWithData_mockData } from './mockData/product_mockData'
import { alertDefault_mockData } from './mockData/alert_mockData'
import * as hooks from '../src/app/hooks'


const mockSelector = jest.spyOn(hooks, 'useAppSelector')
mockSelector.mockImplementation((callback) => callback({ products: productListWithData_mockData, alert: alertDefault_mockData }))
