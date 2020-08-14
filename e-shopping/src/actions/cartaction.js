import {ADD_TO_CART} from "./actiontypes";
import {REMOVE_ITEM} from "./actiontypes";
import {ADD_QUANTITY} from "./actiontypes";
import {SUBTRACT_QUANTITY} from "./actiontypes";
import {PRICE_UPDATE} from "./actiontypes";

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
         id }
    }
export const removeItem= (id)=>{
        return{
            type: REMOVE_ITEM,
             id }
    }
export const addQuantity= (id)=>{
        return{
            type: ADD_QUANTITY,
             id }
}  
export const subtractQuantity= (id)=>{
    return{
        type: SUBTRACT_QUANTITY,
         id }
}  

export const priceUpdate= (id)=>{
    return{
        type: PRICE_UPDATE,
         id }
} 