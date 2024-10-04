import { findProduct } from "@/api/product"
import { ProductCard } from "@/modules/products/ProductCard"

interface Params {
    id: string
}

export default async function ProductDetailsPage({ params }: { params: Params }) {

    const product = await findProduct(params.id)

    return (
        <main className="min-h-screen flex flex-col justify-center items-center">
            <h2 className="mb-10 text-4xl font-mono">Product details</h2>
            <ProductCard product={ product } />
        </main>
    )

}