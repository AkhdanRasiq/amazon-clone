import React from 'react'

import Home from '../../../components/Home/Home'
import '../../../assets/scss/styles.scss'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { store } from '../../../app/store';
import { Provider } from 'react-redux';

export default {
  title: 'Components/Home',
  component: Home,
  argTypes: {
    submit: { action: 'submitted' }
  }
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args: any) => (
  <Provider store={store}>
    <Home {...args} />
  </Provider>
)

export const Default: any = Template.bind({})
