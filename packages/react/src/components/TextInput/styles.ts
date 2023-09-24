import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$white',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid $gray300',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$black',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
    backgroundColor: '$gray100',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$black',
  fontWeight: '$regular',
  backgroundColor: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 'none',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray500',
  },
})
