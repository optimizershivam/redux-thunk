import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {gettodos} from "../redux/action"
import Todoinput from './Todoinput'

const Todos = () => {
  const dispatch=useDispatch()
  const todos=useSelector((state)=>state.todos)
  
  useEffect(()=>{
    if(todos?.length===0){
      dispatch(gettodos())
    }
  },[])
  
  return (
    <div>
      <h2>Todos</h2>
      <Todoinput/>
      {todos?.map((e)=>(
        <p key={e.id}>{e.title}</p>
      ))}
    </div>
  )
}

export default Todos