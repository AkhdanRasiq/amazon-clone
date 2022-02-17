import React from 'react'
import ProductCheckout from '../../../components/Product/ProductCheckout'
import '../../../assets/scss/styles.scss'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { store } from '../../../app/store';
import { Provider } from 'react-redux';


export default {
  title: 'Components/ProductCheckout',
  component: ProductCheckout,
  argTypes: {
    submit: { action: 'submitted' }
  }
} as ComponentMeta<typeof ProductCheckout>

const Template: ComponentStory<typeof ProductCheckout> = (args: any) => (
  <Provider store={store}>
    <ProductCheckout {...args} />
  </Provider>
)


export const Default: any = Template.bind({})
Default.args = {
  a_iId:1,
  a_strTitle:'Apple Pencil (2nd Generation)',
  a_iPrice:29.99,
  a_iRating:5,
  a_strImage:"https://m.media-amazon.com/images/I/41S3MKU9TjL._AC_UL480_FMwebp_QL65_.jpg",
  a_iQty: 3
}
