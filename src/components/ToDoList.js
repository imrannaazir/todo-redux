import React from 'react'
import { useSelector } from 'react-redux'
import ToDo from './ToDo'

export default function ToDoList() {
    const toDos = useSelector((state) => state.toDos)
    console.log(toDos);
    const filters = useSelector((state) => state.filters);
    console.log(filters);
    const { status, colors } = filters;

    const filtersByStatus = (todo) => {
        switch (status) {
            case 'complete':
                return todo.completed
            case 'incomplete':
                return !todo.completed
            default:
                return true;
        };
    };

    const filtersByColor = (todo) => {
        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }
        else {
            return true;
        };
    };
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}
            {
                toDos
                    .filter(filtersByStatus)
                    .filter(filtersByColor)
                    .map((todo) => <ToDo todo={todo} key={todo.id} />)
            }

        </div>
    )
}
