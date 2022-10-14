import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface IButton {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: IButton) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'text-black font-semibold text-sm bg-cyan-500 px-3 py-4 w-full rounded transition-colors focus:ring-2 ring-white hover:bg-cyan-400'
      )}
    >
      {children}
    </Comp>
  );
}
