import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'

import { Dish } from '../pages/Dish'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'

import { Order } from '../pages/Order'
import { Favorites } from '../pages/Favorites'
import { Payment } from '../pages/Payment'



export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dish/:id' element={<Dish/>} />
      <Route path='/new' element={<NewDish/>} />
      <Route path='/edit' element={<EditDish/>} />
      <Route path='/favorites' element={<Favorites/>} />
      <Route path='/order' element={<Order/>} />
      <Route path='/payment' element={<Payment/>} />
    </Routes>
  )
}