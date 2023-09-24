import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  padding: '$2 $4',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$blue600',

        '&:not(:disabled):hover': {
          backgroundColor: '$blue700',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      danger: {
        color: '$white',
        backgroundColor: '#e53e3e',

        '&:not(:disabled):hover': {
          backgroundColor: '#c53030',
        },
      },

      ghost: {
        color: '$black',

        '&:not(:disabled):hover': {
          backgroundColor: '$gray100',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}
