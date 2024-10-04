import Link from 'next/link'

import { ProductCard } from '@/modules/products/ProductCard'
import { getProducts } from '@/api/product'

export default async function Home() {

  const products = await getProducts()

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-10">
      <h2 className="text-balance text-3xl text-center font-bold">Products</h2>

      <div>
        <Link href={ '/products/new' }
          className="bg-slate-700 p-4 rounded hover:text-slate-400 transition-colors"
        >
          New product
        </Link>
      </div>

      <div className="flex gap-8 flex-wrap justify-center md:px-2 mb-10">
        {
          products.map(p => (<ProductCard key={ p.id } product={ p } />))
        }
      </div>

    </div>
  )
}
