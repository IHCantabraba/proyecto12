import './Product.css'
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'
import { useDispathcCart } from '../CustomProvider/CustomProvider'
const Product = ({ prod }) => {
  const dispatch = useDispathcCart()
  const handleClick = (item) => {
    HandleLikeProduct()
    dispatch({ type: 'ADD', item })
  }

  /*   cambiar el color del corazon   */
  const [like, setlike] = useState(false)
  const HandleLikeProduct = () => {
    setlike(!like)
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
        <div className='price-link'>
          <h2 className='prod-precio'>{prod.precio}</h2>
          <div className='prod-link'>
            <Link to={prod.url} target='_blank'>
              Ver producto
            </Link>
          </div>
        </div>
        <div className='product-status'>
          <Rating name='rating-small' defaultValue={2} size='30px' />
          <img
            className='prod-megusta'
            src={like ? 'liked.png' : 'like.png'}
            alt={'megusta'}
            onClick={() => handleClick(prod)}
          />
        </div>
      </div>
    </>
  )
}
export default Product
