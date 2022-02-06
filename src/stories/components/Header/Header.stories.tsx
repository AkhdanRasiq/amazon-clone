import Header from '../../../components/Header/Header'
import '../../../assets/scss/styles.scss'

import StoryRouter from 'storybook-react-router'


export default {
  title: 'Components/Header',
  component: Header,
  // decorators: [StoryRouter()],
  argTypes: {
    submit: { action: 'submitted' }
  }
}

const Template = function (args: any, { argTypes }: any) {
  return (
      <div>
        <Header />
      </div>
  )
}

export const Default: any = Template.bind({})
