import { ActionTypes } from "../contants/Actiontypes";

const initialstate={
    products:[
{
id:1,
title:"ahmad",
role:"programmer"
}
    ]
}
export const productReducer = (state=initialstate,{type,payload})=>{
switch (type) {
    case ActionTypes.SET_PRODUCTS:
    return state 
    default:
    return state
}
}