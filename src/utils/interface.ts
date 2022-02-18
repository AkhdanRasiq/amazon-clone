import { AlertColor } from '@mui/material'

export interface IProduct {
  id      : number,
  title   : string,
  price   : number,
  rating  : number,
  image   : string,
  qty     : number  
}

export interface IProductList {
  productList: Array<IProduct>
}

export interface IAlert {
  status      : boolean,
  severity    : AlertColor,
  msg         : string
}
