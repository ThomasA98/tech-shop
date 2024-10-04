'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { deleteProduct } from '@/api/product'
import { Product } from '@/interfaces/product'
import { Button, Card, Text, Title } from '../ui'

export interface ProductCardProps {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const router = useRouter()

    const onPush = (href: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        router.push(href)
    }

    const deleteHandler = async () => {
        await deleteProduct(product.id!)

        router.refresh()
    }

    return (
        <Card>
            <div className="relative overflow-hidden rounded-xl h-96 hover:shadow-lg hover:shadow-black transition-shadow">
                <Image
                    src={ product.image ?? 'https://via.placeholder.com/600/d32776' }
                    alt={ product.name }
                    className="object-cover w-full h-full aspect-square bg-center cursor-pointer"
                    onClick={() => {
                        router.push(`/products/${product.id}`)
                    }}
                    width={ 200 }
                    height={ 200 }
                />
            </div>
            <div className="p-6 bg-gray-700 rounded-xl hover:shadow-lg hover:shadow-black transition-shadow">
                <div className="flex items-center justify-between mb-2">
                    <Title
                        size="4"
                    >
                        { product.name }
                    </Title>
                    <Text
                        element="span"
                        textTransform={ text => new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }).format(Number(text))
                        }
                        text={ product.price }
                    />
                </div>
                <Text
                    element="p"
                    text={ product.description ?? '' }
                />
            </div>
            <div className="flex">
                <Button
                    onClick={onPush(`/products/${product.id}/edit`)}
                    type="button"
                    styleButton="primary"
                >
                    Edit
                </Button>
                <Button
                    type="button"
                    styleButton="delete"
                    onClick={ event => {
                        event.stopPropagation()
                        deleteHandler()
                    } }
                >
                    Delete
                </Button>
            </div>
        </Card>
    )
}