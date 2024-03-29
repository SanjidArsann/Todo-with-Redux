import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes";
import initialState from './initialState';

const nextId =(todos)=>{
   const maxId = todos.reduce((maxId, todo)=>Math.max(todo.id,maxId),-1)
 return maxId+1;
} 


const todoReducer =(state=initialState, action)=>{
    switch (action.type) {
        case ADDED:
            return[
                ...state,
                {
                    id:nextId(state),
                    todoText: action.payload,
                    completed: true,
                }
            ]
        case TOGGLED:
            return state.map(todo => {
                if(todo.id !== action.payload){
                    return todo;
                }
                return{
                    ...todo,
                    completed: !todo.completed,
                }
            })
        case ALLCOMPLETED:
            return state.map(todo=>{
                return{
                    ...todo,
                    completed: false,
                }
            })
        case CLEARCOMPLETED: 
            return state.filter( todo=> todo.completed)   
        
        case DELETED:
            return state.filter(todo=> todo.id !==action.payload)
        
        case COLORSELECTED:
            const {todoId, color}= action.payload;
            return state.map(todo=>{
                if(todo.id !== todoId){
                    return todo;
                }
                return{
                    ...todo,
                    color:color,
                }
            })    
             
    
        default:
            return state;
            
    }

}

export default todoReducer;