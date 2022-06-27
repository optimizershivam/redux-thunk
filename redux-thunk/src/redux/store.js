import { legacy_createStore,compose, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk"

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const customMiddleware=({dispatch})=>(next)=>(action)=>{
//     if(typeof action ==="function"){
//         return action(dispatch)
//     }else if(typeof action ===  "object"){
//         return next(action)
//     }
// }

export const store=legacy_createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
