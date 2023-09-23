import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  borderRadius: '$sm',
  border: 0,
  fontWeight: '$bold',
  color: '$white',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$green500',
      },
      secondary: {
        backgroundColor: '$blue500',
      },
    },
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$lg',
        padding: '$4 $8',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
