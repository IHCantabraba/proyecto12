import React, { useState } from 'react'
import { getProducts } from '../../api/db'
import Product from '../../components/Product/Product'
import './Products.css'
import { useTotalProducts } from '../../components/CustomProvider/CustomProvider'
const Products = () => {
  const productAmount = useTotalProducts()

  console.log('soy el HEADER y me renderizo')

  const [productos, setProducts] = useState(getProducts())
  const [filter, setFilter] = useState('Show All')
  const categories = [...new Set(getProducts().map((prod) => prod.category))]
  const filteredProducts = productos.filter((product) =>
    filter === 'Show All' ? product : product.category === filter
  )

  return (
    <>
      <section className='filter'>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder='filter'
        >
          <option value='Show All'>Show All ({productAmount.length})</option>
          {categories.map((cat) => (
            <option>{cat}</option>
          ))}
        </select>
      </section>
      <section className='producuts'>
        {filteredProducts.map((producto) => (
          <div className='pruduct-row' key={producto.id}>
            <Product prod={producto}></Product>
          </div>
        ))}
      </section>
    </>
  )
}

export default Products
