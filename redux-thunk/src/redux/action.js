import * as types from "./action.types"
import axios from "axios"

export const gettodorequest=()=>{
    return {type:types.GET_TODO_REQUEST}
}
export const gettodosuccess=(payload)=>{
    return {type:types.GET_TODO_SUCCESS,payload}
}
export const gettodofailure=()=>{
    return {type:types.GET_TODO_FAILURE}
}

export const gettodos=(payload)=>(dispatch)=>{
    dispatch(gettodorequest())
    axios.get('/todos')
    .then((r)=>dispatch(gettodosuccess(r.data)))
    .catch((err)=>dispatch(gettodofailure(err)))
  }

export const addtodorequest=()=>{
    return {type:types.ADD_TODO_REQUEST}
}
export const addtodosuccess=(payload)=>{
    return {type:types.ADD_TODO_SUCCESS,payload}
}
export const addtodofailure=()=>{
    return {type:types.ADD_TODO_FAILURE}
}