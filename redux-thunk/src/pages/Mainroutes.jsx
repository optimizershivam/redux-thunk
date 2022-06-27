import React from 'react'
import Todos from '../components/Todos'
import {Routes,Route} from "react-router-dom"
import Singletodo from "./Singletodo"

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Todos/>} />
            <Route path='/:id' element={<Singletodo/>} />
        </Routes>
    </div>
  )
}

export default Mainroutes