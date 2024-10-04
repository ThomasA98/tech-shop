import { useState } from "react"

export const useForm = <T>(initialState: T, submit: (state: T) => Promise<boolean> | boolean) => {
    const [state, setState] = useState(initialState)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (submit(state)) setState(initialState)
    }

    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setState(prev => ({
            ...prev,
            [target.name]: target.value,
        }))
    }

    return {
        state,
        onChange,
        handleSubmit,
    }
}