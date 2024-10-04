import { findProduct } from '@/api/product';
import { Card } from '@/modules/ui';
import { Form } from './Form';

export interface PageProps {
    params: {
        id: string
    }
}

export default async function ProductEditPage({ params: { id } }: PageProps) {
    const { name, price, description } = await findProduct(id)

    return (
        <main className="flex justify-center items-center min-h-screen">
            <Card>
                <h2 className="text-2xl font-mono text-center">Edit product {id}</h2>
                <Form description={description} name={name} price={price} id={id} />
            </Card>
        </main>
    )
}