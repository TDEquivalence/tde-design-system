import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@tde-ui/react'

export default {
  title: 'Form/Text input',
  component: TextInput,
  args: {
    placeholder: 'Type your username',
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
        }}
      >
        <Text size="sm">Username</Text>
        <Story />
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
