'use client'

import { Form } from '@/modules/forms'
import { Product } from '@/interfaces/product'

export const dynamic = 'force-dynamic'

export interface ProductFormProps {
    initialState: Product
    onSubmit: (state: Product) => Promise<boolean> | boolean
}

export const ProductForm: React.FC<ProductFormProps> = ({ initialState, onSubmit }) => {
    return (
        <Form
            className="flex flex-col gap-8"
            initialState={initialState}
            onSubmit={onSubmit}
        >
            {({ onChange, state }) => (<>
                <div className="flex gap-4">
                    <Form.Input
                        name="name"
                        text="name"
                        type="text"
                        value={state.name}
                        onChange={onChange}
                        className="flex-[3]"
                    />
                    <Form.Input
                        name="price"
                        text="price"
                        type="number"
                        value={state.price}
                        onChange={onChange}
                        className="flex-1"
                    />
                </div>
                <Form.Input
                    name="description"
                    text="description"
                    type="text"
                    value={state.description}
                    onChange={onChange}
                />
                <div className="flex justify-between">
                    <button className="bg-green-400 px-4 py-2 rounded text-black font-semibold shadow-md shadow-black" type="submit">Submit</button>
                    <button className="underline" type="reset">Reset</button>
                </div>
            </>)}
        </Form>
    )
}