import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client'
import React, { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterForm from './pages/RegisterForm/RegisterForm'
import Products from './pages/Products/Products'
import Landing from './pages/Landing/Landing'
import NotFound from './pages/NotFound/NotFound'
import FavProducts from './pages/FavProducts/FavProducts'
import { CartProvider } from './components/Favourites/Favourites'
createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <CartProvider>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Landing />}></Route>
          <Route path='register' element={<RegisterForm />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='FavProducts' element={<FavProducts />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </CartProvider>
  </BrowserRouter>
)
