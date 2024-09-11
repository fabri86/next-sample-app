import { AddToCart } from '@/app/components/add-to-cart'
import React from 'react'

const ProductCard = () => {
  return (
    <div className="flex border border-gray my-2 p-2 justify-between w-full items-center">
      <span>
        <h2 className="text-lg">ACME matches</h2>
        <p className="text-xs">Price: 10 $</p>
      </span>
      <AddToCart />
    </div>
  )
}

export default ProductCard
