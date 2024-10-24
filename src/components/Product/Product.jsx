import './Product.css'
import React, { useState } from 'react'
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
          <div class='stars'>
            <form action=''>
              <input class='star star-5' id='star-5' type='radio' name='star' />
              <label class='star star-5' for='star-5'></label>
              <input class='star star-4' id='star-4' type='radio' name='star' />
              <label class='star star-4' for='star-4'></label>
              <input class='star star-3' id='star-3' type='radio' name='star' />
              <label class='star star-3' for='star-3'></label>
              <input class='star star-2' id='star-2' type='radio' name='star' />
              <label class='star star-2' for='star-2'></label>
              <input class='star star-1' id='star-1' type='radio' name='star' />
              <label class='star star-1' for='star-1'></label>
            </form>
          </div>
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
