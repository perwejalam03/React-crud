import React from 'react'
import HomeCrud from './Components/HomeCrud'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateUsers from './Components/CreateUsers'
import Users from './Components/Users'
import Edituser from './Components/Edituser'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <HomeCrud/>
      <Routes>
        <Route element={<CreateUsers/>} path='/'/>
        <Route element={<Users/>} path='/users'/>
        <Route element={<Edituser/>} path='/edit/:index'/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
