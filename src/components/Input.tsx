import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface IInputRoot {
  children: ReactNode;
}

function InputRoot({ children }: IInputRoot) {
  return (
    <div
      className={ 
      `
        flex
        gap-3
        h-12
        text-xs
        rounded 
        pb-3
        pt-3
        px-3
        w-full
        bg-black-600
      ` }
    >
      { children }
    </div>
  )
}

InputRoot.displayName = 'Input.Root'

interface IInputIcon {
  children: ReactNode;
}

function InputIcon({ children }: IInputIcon) {
  return (
    <Slot className='w-6 h-6'>
      {children}
    </Slot>
  )
}

InputIcon.displayName = 'Input.Icon'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

function InputInput(props: IInput) {
  return (
    <input
      className={clsx(
        `
          flex-1
          bg-transparent 
          text-grey-100
          outline-none
          placeholder-grey-800
        `,
      )}
      {...props}
    />
  );
}

InputInput.displayName = 'Input.Input'

export const TextInput = {
  input: InputInput,
  root: InputRoot,
  icon: InputIcon
}
