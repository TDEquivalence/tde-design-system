import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@tde-ui/react'
import { ArrowRight } from 'lucide-react'

export default {
  title: 'Form/Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Primary',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: 'Small',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight fontWeight="bold" />
      </>
    ),
  },
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
    children: 'Delete',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}
