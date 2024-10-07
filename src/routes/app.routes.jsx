import { Routes, Route } from 'react-router-dom'

import { Dish } from '../pages/Dish'
import { EditDish } from '../pages/EditDish'
import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'

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