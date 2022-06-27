import axios from 'axios'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addtodofailure, addtodorequest, addtodosuccess,gettodos } from '../redux/action'

const Todoinput = () => {
  const dispatch=useDispatch()
    const [title, settitle] = useState("")

    const handleadd=()=>{
        const payload={
            title,
            status:false
        }
        settitle("")
        dispatch(addtodorequest())
        axios.post("/todos",payload)
        .then((r)=>dispatch(addtodosuccess()))
        .then(()=>dispatch(gettodos()))
        .catch((e)=>dispatch(addtodofailure(e)))
    }
  return (
    <div>
            <input value={title} placeholder="add todo..." onChange={(e)=>settitle(e.target.value)} />
            <button onClick={handleadd}>Add</button>
    </div>
  )
}

export default Todoinput