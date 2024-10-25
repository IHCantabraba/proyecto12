import React, {
  useEffect,
  useState,
  useReducer,
  useContext,
  createContext
} from 'react'

import './Favourites.css'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.item]
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
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}
export const useCart = () => useContext(CartStateContext)
export const useDispathcCart = () => useContext(CartDispatchContext)