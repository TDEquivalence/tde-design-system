import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@tde-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Hello World',
    variant: 'primary',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Hello World',
    variant: 'secondary',
  },
}
