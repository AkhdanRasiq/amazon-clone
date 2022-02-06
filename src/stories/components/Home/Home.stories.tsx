import Home from '../../../components/Home/Home'
import '../../../assets/scss/styles.scss'

import StoryRouter from 'storybook-react-router'


export default {
  title: 'Components/Home',
  component: Home,
  // decorators: [StoryRouter()],
  argTypes: {
    submit: { action: 'submitted' }
  }
}

const Template = function (args: any, { argTypes }: any) {
  return (
      <div>
        <Home />
      </div>
  )
}

export const Default: any = Template.bind({})
