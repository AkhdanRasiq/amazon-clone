import { IProductList, IProduct } from '../../src/utils/interface'


export const productListDefault_mockData: IProductList = {
  productList: []
}

export const productListWithData_mockData: IProductList = {
  productList: [
    {
      id      : 0,
      title   : "Test",
      price   : 19.99,
      rating  : 5,
      image   : "www.test.com",
      qty     : 3
    }
  ]
}

export const productListWithTwoData_mockData: Array<IProduct> = [
  {
    id      : 0,
    title   : "Test",
    price   : 19.99,
    rating  : 5,
    image   : "www.test.com",
    qty     : 1
  },
  {
    id      : 1,
    title   : "Test2",
    price   : 29.99,
    rating  : 4,
    image   : "www.test2.com",
    qty     : 1
  }
]
