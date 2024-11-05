import React, { useEffect, useState } from 'react'
import FavProduct from '../../components/Product/FavProduct'
import './FavProducts.css'
import { useCart } from '../../components/CustomProvider/CustomProvider'
const FavProducts = () => {
  const items = useCart()

  if (items.length === 0) {
    return (
      <section className='favproducs'>
        <p>No has seleccionado ningún producto como favorito aún 😑</p>
      </section>
    )
  }
  return (
    <section className='producuts'>
      {items.map((item) => (
        <div className='pruduct-row' key={items.id}>
          <FavProduct prod={item}></FavProduct>
        </div>
      ))}
    </section>
  )
}

export default FavProducts
