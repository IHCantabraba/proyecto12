import './Product.css'
import React, { useReducer, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'
import { useDispathcCart } from '../Favourites/Favourites'
const FavProduct = ({ prod }) => {
  const dispatch = useDispathcCart()
  const handleRemove = (index) => {
    dispatch({ type: 'REMOVE', index })
  }

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
            className='prod-megusta-dislike'
            src={'dislike.png'}
            alt={'megusta'}
            onClick={() => handleRemove(prod)}
          />
        </div>
      </div>
    </>
  )
}
export default FavProduct
