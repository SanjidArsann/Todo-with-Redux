import initialState from './initialState'
import {STATUSCHANGED, COLORCHANGED} from './actionTypes';
const filterReducer =(state= initialState,action)=>{
    switch (action.type) {
        case STATUSCHANGED:
           return{
             ...state,
             status:action.payload,
           } 
        case COLORCHANGED:
               const {colors, changeType}=action.payload;
               switch (changeType) {
                case 'added':
                    return{
                        ...state,
                        colors:[
                            ...state.colors,
                            colors

                        ]
                    }
                case 'removed':
                    return{
                        ...state,
                        colors: state.colors.filter(existingColor => existingColor !== colors)
                    }
               
                default:
                    return state;
               }
    
        default:
           return state;
    }

}

export default filterReducer;