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
    backgroundColor: '$gray200',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$blue600',

        '&:not(:disabled):hover': {
          backgroundColor: '$blue700',
        },

        '&:focus': {
          boxShadow: '0 0 0 2px $colors$blue600',
        },
      },

      danger: {
        color: '$white',
        backgroundColor: '#e53e3e',

        '&:not(:disabled):hover': {
          backgroundColor: '#c53030',
        },

        '&:focus': {
          boxShadow: '0 0 0 2px #e53e3e',
        },
      },

      ghost: {
        color: '$black',

        '&:not(:disabled):hover': {
          backgroundColor: '$gray100',
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

Button.displayName = 'Button'
