import React from 'react'
import { Product } from '../../pages/products/Products'

export interface ProductGridProps {
  products: Product[]
}

export const ProductGrid = (props: ProductGridProps) => {
  const { products } = props;
  console.log(products);
  return (
    <div className="grid3">
      {products.map(product => (
        <div>
          <h2>{product.title}</h2>
          <img src={product.imgSrc} alt="cake" />
          <br />
          <blockquote>$ {product.price}</blockquote>
          <p>
            {product.description}
          </p>
          <button className="btn btn-outline-pink">Order Now</button>
        </div>
      ))}
    </div>
  )
}
