import React from 'react'
import Product from './Product'
import { IProductListProps } from '@/types/types'

function ProductList({ products }: IProductListProps) {
  return (
    <div className='grid grid-cols-1 gap-y-10'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList