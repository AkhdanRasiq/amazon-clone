import React from 'react'

import Header from '../../../components/Header/Header'
import '../../../assets/scss/styles.scss'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { store } from '../../../app/store';
import { Provider } from 'react-redux';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    submit: { action: 'submitted' }
  }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args: any) => (
  <Provider store={store}>
    <Header {...args} />
  </Provider>
)


export const Default: any = Template.bind({})
