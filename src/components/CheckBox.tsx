import * as CheckboxP from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface ICheckBox {
  id?: string
}

export function CheckBox({ id }: ICheckBox) {
  return (
    <CheckboxP.Root className="w-6 h-6 p-[2px] bg-black-600 rounded" id={ id }>
      <CheckboxP.Indicator asChild>
        <Check weight='bold' className="w-5 h-5 text-cyan-500" />
      </CheckboxP.Indicator>
    </CheckboxP.Root>
  )
}