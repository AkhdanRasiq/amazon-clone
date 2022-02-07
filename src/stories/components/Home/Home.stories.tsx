import React from 'react'

import Home from '../../../components/Home/Home'
import '../../../assets/scss/styles.scss'

// import StoryRouter from 'storybook-react-router'
import { ComponentStory, ComponentMeta } from '@storybook/react'


export default {
  title: 'Components/Home',
  component: Home,
  // decorators: [StoryRouter()],
  argTypes: {
    submit: { action: 'submitted' }
  }
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args: any) => <Home {...args} />


// const Template = function (args: any, { argTypes }: any) {
//   return (
//     <Home />
//   )
// }

export const Default: any = Template.bind({})
