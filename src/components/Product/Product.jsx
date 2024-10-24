import './Product.css'
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'
const Product = ({ prod }) => {
  const [like, setlike] = useState(false)

  const HandleLikeProduct = (prod) => {
    setlike(!like)
    console.log(like)
    HandleFavoutirte(prod)
  }

  const HandleFavoutirte = (prod) => {
    prod.favourite = !prod.favourite
    console.log(prod.favourite)
  }

  console.log()
  return (
    <>
      <div className='container-prod'>
        <h3 className='prod-name'>{prod.name}</h3>
        <img className='prod-img' src={prod.img}></img>
        <div className='product-origin'>
          <h4 className='prod-marca'>{prod.marca}</h4>
          <h4 className='prod-modelo'>{prod.modelo}</h4>
        </div>
        <h2 className='prod-precio'>{prod.precio}</h2>
        <div className='prod-link'>
          <Link to={prod.url} target='_blank'>
            Ver producto
          </Link>
        </div>
        <div className='product-status'>
          <Rating />
          <img
            className='prod-megusta'
            src={like ? 'liked.png' : 'like.png'}
            alt='megusta'
            onClick={HandleLikeProduct}
          />
        </div>
      </div>
    </>
  )
}
export default Product
