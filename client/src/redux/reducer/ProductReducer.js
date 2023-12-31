import { ActionTypes } from "../contants/Actiontypes";

const initialstate={
    products:[]
}
export const productReducer = (state=initialstate,{type,payload})=>{
switch (type) {
    case ActionTypes.SET_PRODUCTS:
    return {...state,products:payload} 
    default:
    return {...state}
}
}