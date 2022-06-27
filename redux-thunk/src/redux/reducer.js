import * as types from "./action.types"

const initialstate={
    todos:[],
    isloading:false,
    iserror:false
}

export const reducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
        case types.GET_TODO_REQUEST:
            return {
                ...state,isloading:true,iserror:false
            }
        case types.GET_TODO_SUCCESS:
            return {
                ...state,todos:payload,isloading:false,iserror:false
            }
        case types.GET_TODO_FAILURE:
            return {
                ...state,isloading:false,iserror:true
            }
        case types.ADD_TODO_REQUEST:
            return {
                ...state,isloading:true,iserror:false
            }
        case types.ADD_TODO_SUCCESS:
            return {
                ...state,todos:payload,isloading:false,iserror:false
            }
        case types.ADD_TODO_FAILURE:
            return {
                ...state,isloading:false,iserror:true
            }
        default:
            return state
    }
}