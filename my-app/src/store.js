
import {legacy_createStore,combineReducers} from "redux"

let initState = {
    data:""
}

const textReducer = (state=initState,{type,payload})=>{
    switch(type){
        case "GET_TEXT_SUCCESS" : {
           return {
            ...state,
            data : payload
           }
        }
        default :return state
    }
}



const rootReducers = combineReducers({
    text:textReducer
});

export const store = legacy_createStore(rootReducers);