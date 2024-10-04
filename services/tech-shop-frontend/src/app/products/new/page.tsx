'use client'

import { useRouter } from "next/navigation"
import { postProduct } from "@/api/product"
import { ProductForm } from "@/modules/products/ProductForm"
import { Card } from "@/modules/ui/Card"

const NewProductPage = () => {

  const router = useRouter()

  return (
    <section className="flex justify-center items-center min-h-screen">
      <Card>
        <h2 className="text-4xl font-mono text-center">New Product</h2>
        <ProductForm
          initialState={{
            name: '',
            price: 0,
            description: '',
          }}
          onSubmit={async (product) => {
            try {
              const rest = await postProduct(product)
              const data = await rest.json()

              if (data.error) throw new Error(data.message)

              router.push('/')
              router.refresh()

              return true
            } catch (error) {
              alert(error)
              return false
            }
          }}
        />
      </Card>
    </section>
  )
}
export default NewProductPage

