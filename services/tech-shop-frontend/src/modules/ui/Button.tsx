import { ComponentProps } from 'react'
import clsx from 'clsx'

export interface ButtonRouterProps
  extends Omit<ComponentProps<'button'>, 'className'> {
  styleButton?: 'gris' | 'primary' | 'secondary' | 'delete' | 'warning'
}

export const Button: React.FC<ButtonRouterProps> = ({
  styleButton = 'gris',
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx('px-8 py-4 text-lg rounded transition-colors', {
        'bg-slate-700 hover:bg-slate-400 shadow-md shadow-black': styleButton === 'gris',
        'bg-blue-700 hover:bg-blue-400 shadow-md shadow-black': styleButton === 'primary',
        'hover:underline': styleButton === 'secondary',
        'text-red-400 hover:text-red-300': styleButton === 'delete',
        'text-yellow-400 hover:text-yellow-300': styleButton === 'warning',
      })}
    />
  )
}
