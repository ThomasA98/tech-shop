'use client'

import { useForm } from './hooks/useForm'

export interface FormStateController<T> {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    state: T
}

export interface FormProps<T> {
    initialState: T
    onSubmit: (state: T) => Promise<boolean> | boolean
    children: (exhibitor: FormStateController<T>) => React.ReactNode
    className?: HTMLFormElement['className']
}

export default function Form<T>({ children, initialState, onSubmit, className }: FormProps<T>) {

    const { handleSubmit, onChange, state } = useForm(initialState, onSubmit)

    return (
        <form className={className} onSubmit={handleSubmit}>
            {children({
                state,
                onChange,
            })}
        </form>
    )
}