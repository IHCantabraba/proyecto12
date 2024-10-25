import React, { useEffect, useState } from 'react'
import { getProducts } from '../../api/db'
import Product from '../../components/Product/Product'
import './Products.css'

const Products = () => {
  const [productos, setProducts] = useState(getProducts())
  useEffect(() => {
    setProducts(productos)
  }, [productos])

  return (
    <section className='producuts'>
      {productos.map((producto) => (
        <div className='pruduct-row' key={producto.id}>
          <Product prod={producto}></Product>
        </div>
      ))}
    </section>
  )
}

export default Products
