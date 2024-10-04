import { ComponentProps } from 'react'

export type CardProps = Omit<ComponentProps<'div'>, 'className'>

export const Card: React.FC<CardProps> = (props) => <div
    { ...props }
    className="flex flex-col gap-4 justify-between p-8 w-full max-w-md rounded-lg bg-gray-800 shadow-lg shadow-black antialiased"
/>