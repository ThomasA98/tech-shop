import { Product } from "@/interfaces/product"

export const API_PRODUCT_URL = 'http://localhost:4000/api/products'

export const postProduct = (product: Product) => {
    return fetch(API_PRODUCT_URL, {
        method: 'POST',
        headers: {
            ['Content-Type']: 'application/json',
        },
        body: JSON.stringify({
            ...product,
            price: Number(product.price),
        }),
    })
}

export const getProducts = async () => {
    const res = await fetch(API_PRODUCT_URL, {
        cache: 'no-store',
    })

    const products = await res.json()

    return products as Product[]
}

export const deleteProduct = async (id: string) => {
    const res = await fetch(`${API_PRODUCT_URL}/${id}`, {
        method: 'DELETE',
    })

    const product = await res.json()

    return product as Product
}

export const findProduct = async (id: string) => {
    const res = await fetch(`${API_PRODUCT_URL}/${ id }`, {
        cache: 'no-store',
    })

    const products = await res.json()

    return products as Product
}

export const updateProduct = async (id: string, product: Product) => {
    return fetch(`${API_PRODUCT_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            ['Content-Type']: 'application/json',
        },
        body: JSON.stringify({
            ...product,
            price: Number(product.price),
        }),
    })
}