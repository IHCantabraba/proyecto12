import React, { useReducer, useContext, createContext } from 'react'
import { getProducts } from '../../api/db'

const CartStateContext = createContext()
const CartDispatchContext = createContext()
const ProductsContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const existintIndex = state.findIndex(
        (item) => item.id === action.item.id
      )
      if (existintIndex === -1) {
        return [...state, action.item]
      }

    case 'REMOVE':
      const newArray = [...state]
      newArray.splice(action.index, 1)
      return newArray
    default:
      throw new Error(`Unknown action ${action.type}`)
  }
}
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])
  const totalProducts = getProducts()
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        <ProductsContext.Provider value={totalProducts}>
          {children}
        </ProductsContext.Provider>
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}
export const useCart = () => useContext(CartStateContext)
export const useDispathcCart = () => useContext(CartDispatchContext)
export const useTotalProducts = () => useContext(ProductsContext)
