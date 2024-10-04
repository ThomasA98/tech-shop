'use client'
import { updateProduct } from '@/api/product';
import { Product } from '@/interfaces/product';
import { ProductForm } from '@/modules/products/ProductForm';
import { useRouter } from 'next/navigation';

export const Form = ({ description, name, price, id }: Product) => {
    const router = useRouter()

    return (
        <ProductForm
            initialState={{ name, price, description }}
            onSubmit={async (formProduct) => {
                try {
                    const rest = await updateProduct(id!, formProduct)
                    const data = await rest.json()

                    if (data.error) throw new Error(data.message)

                    router.push(`/products/${id}`)
                    router.refresh()

                    return true
                } catch (error) {
                    alert(error)
                    return false
                }
            }}
        />
    )
}