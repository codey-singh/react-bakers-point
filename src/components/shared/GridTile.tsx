import React, { useState } from 'react'
import { Product } from '../../pages/products/Products'

export interface GridTileProps {
  gridItem: Product
}

export const GridTile = (props: GridTileProps) => {
  const { gridItem } = props;
  return (
    <div>
      <h2>{gridItem.title}</h2>
      <img src={gridItem.imgSrc} alt={gridItem.alt} />
      <br />
      <blockquote>$ {gridItem.price}</blockquote>
      <p>
        {gridItem.description}
      </p>
      <button className="btn btn-outline-pink">Order Now</button>
    </div>
  )
}
