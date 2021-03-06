import React from 'react'
import Product from '../../../components/Product/Product'
import '../../../assets/scss/styles.scss'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { store } from '../../../app/store';
import { Provider } from 'react-redux';


export default {
  title: 'Components/Product',
  component: Product,
  argTypes: {
    submit: { action: 'submitted' }
  }
} as ComponentMeta<typeof Product>

const Template: ComponentStory<typeof Product> = (args: any) => (
  <Provider store={store}>
    <Product {...args} />
  </Provider>
)


export const Default: any = Template.bind({})
Default.args = {
  a_strId:"2",
  a_strTitle:'Apple Pencil (2nd Generation)',
  a_iPrice:29.99,
  a_iRating:5,
  a_strImage:"https://m.media-amazon.com/images/I/41S3MKU9TjL._AC_UL480_FMwebp_QL65_.jpg"
}
