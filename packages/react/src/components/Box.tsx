import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$5',
  borderRadius: '$md',
  border: '1px solid $gray500',
  backgroundColor: '$white',
})

export type BoxProps = ComponentProps<typeof Box> & {
  as?: ElementType
}

Box.displayName = 'Box'
