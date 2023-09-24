import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@tde-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text color="$black">Box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
