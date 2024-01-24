import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { statusChanged ,colorChanged } from '../redux/filter/actions';


const remainingTask=(no_of_todo)=>{
    switch (no_of_todo) {
        case 0:
            return 'No Task'
        case 1:
            return '1 task'
        default:
            return `${no_of_todo} tasks`
    }
};


const Footer = () => {
    const dispatch =useDispatch();
    const todos = useSelector((state)=>state.todos);
    const filters = useSelector((state)=>state.filters);
    console.log(filters);
    const remainingTodo=todos.filter(todo=> todo.completed).length; 
    const {status,colors}=filters;
    
    const handleStatus=(status)=>{
        dispatch(statusChanged(status));
    }

    const handleColorChanged=(color)=>{
        if(colors.includes(color)){
            dispatch(colorChanged(color,'removed'));
        }
        else{
            dispatch(colorChanged(color,'added'));
        }
        
    }
    console.log(colors);
    
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
                    <p>{remainingTask(remainingTodo)} left</p>
                    <ul className="flex space-x-1 items-center text-xs">
                        <li className={`cursor-pointer ${status === 'All' ? "font-bold":''}`} onClick={()=>handleStatus('All')}>All</li>
                        <li>|</li>
                        <li className={`cursor-pointer ${status === 'Incomplete' ? "font-bold":''}`}onClick={()=>handleStatus('Incomplete')}>Incomplete</li>
                        <li>|</li>
                        <li className={`cursor-pointer ${status === 'Complete' ? "font-bold":''}`} onClick={()=>handleStatus('Complete')}>Complete</li>
                        <li></li>
                        <li></li>
                        <li
                            className={`h-3 w-3 border-2 border-green-500  rounded-full cursor-pointer ${colors.includes('green') ? 'bg-green-500':''}`}onClick={()=>handleColorChanged('green')}
                        ></li>
                        <li
                            className={`h-3 w-3 border-2 border-red-500  rounded-full cursor-pointer ${colors.includes('red') ? 'bg-red-500':''}`}onClick={()=>handleColorChanged('red')}
                        ></li>
                        <li
                            className={`h-3 w-3 border-2 border-yellow-500  rounded-full cursor-pointer ${colors.includes('yellow') ? 'bg-yellow-500':''}`}onClick={()=>handleColorChanged('yellow')}
                        ></li>
                    </ul>
                </div>
    );
};

export default Footer;