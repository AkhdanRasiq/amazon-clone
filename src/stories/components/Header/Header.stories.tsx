import React from 'react'

import Header from '../../../components/Header/Header'
import '../../../assets/scss/styles.scss'

// import StoryRouter from 'storybook-react-router'
import { ComponentStory, ComponentMeta } from '@storybook/react'


export default {
  title: 'Components/Header',
  component: Header,
  // decorators: [StoryRouter()],
  argTypes: {
    submit: { action: 'submitted' }
  }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args: any) => <Header {...args} />


// const Template = function (args: any, { argTypes }: any) {
//   return (
//     <Header />
//   )
// }

export const Default: any = Template.bind({})
