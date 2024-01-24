
import { COLORCHANGED, STATUSCHANGED } from './actionTypes';

export const statusChanged =(status )=>{
   return{
    type:STATUSCHANGED,
    payload: status,
   }
}
export const colorChanged =(colors, changeType)=>{
    return{
        type:COLORCHANGED,
        payload:{
            colors,
            changeType,
        }
    }
}