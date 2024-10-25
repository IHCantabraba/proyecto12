import React, { useEffect, useState } from 'react'
import { getProducts } from '../../api/db'
import FavProduct from '../../components/Product/FavProduct'
import './FavProducts.css'
import {
  useCart,
  useDispathcCart
} from '../../components/Favourites/Favourites'
const FavProducts = () => {
  const items = useCart()
  const dispatch = useDispathcCart()

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
