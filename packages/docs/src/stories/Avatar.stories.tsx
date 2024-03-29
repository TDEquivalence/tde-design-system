import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@tde-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/aescudeiro.png',
    alt: 'Afonso Escudeiro',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
