import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
// import {countReducer} from "../reducer/reducer.js"

const initialState = {
    count:0
    }
    
    const countReducer = (state = initialState, { type, payload }) => {
        switch (type) {
    
        case "INCREMENT_COUNT":
            return { ...state, count:state.count+1 }
    
        case "DECREMENT_COUNT":
            return { ...state, count:state.count-1  }
    
    
        default:
            return state
        }
    }    
    
    
const ConfigureStore = () => {
    let combine = combineReducers({CountRe:countReducer})
    let store=createStore(combine, applyMiddleware(thunk))
    return ( store );
}
 
export default ConfigureStore  ;


