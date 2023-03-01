import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorChanged, statusChanged } from '../redux/filters/actions';

const todoNumberDefiner = (numberOfTodo) => {
    switch (numberOfTodo) {
        case 0:
            return 'No task'
        case 1:
            return '1 task'
        default:
            return `${numberOfTodo} tasks`;
    };
};

export default function Footer() {
    const toDos = useSelector((state) => state.toDos);
    const leftToDos = toDos.filter((todo) => !todo.completed).length;
    const filters = useSelector((state) => state.filters);
    const { status, colors } = filters;
    console.log(colors);


    const dispatch = useDispatch()

    // handle change status
    const handleStatusChange = (status) => {
        dispatch(statusChanged(status));
    };

    //handle color change
    const handleColorChange = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChanged(color, "removed"))
        }
        else {
            dispatch(colorChanged(color, "added"))
        }
    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{todoNumberDefiner(leftToDos)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={() => handleStatusChange('all')} className={`${status === "all" && "font-bold"} cursor-pointer`}>All</li>
                <li>|</li>
                <li onClick={() => handleStatusChange('incomplete')} className={`${status === "incomplete" && "font-bold"} cursor-pointer`}>Incomplete</li>
                <li>|</li>
                <li onClick={() => handleStatusChange('complete')} className={`${status === "complete" && "font-bold"} cursor-pointer`}>Complete</li>
                <li></li>
                <li></li>
                <li onClick={() => handleColorChange("green")}
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && "bg-green-500"} `}
                ></li>
                <li onClick={() => handleColorChange("red")}
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"}`}
                ></li>
                <li onClick={() => handleColorChange("yellow")}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && "bg-yellow-500"}`}
                ></li>
            </ul>
        </div>
    )
}
