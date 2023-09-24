import { ComponentProps, ElementRef, forwardRef } from 'react'
import { TextInputContainer, Input } from './styles'

export type TextInputProps = ComponentProps<typeof Input>

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
