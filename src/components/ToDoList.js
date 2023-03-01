import React from 'react'
import { useSelector } from 'react-redux'
import ToDo from './ToDo'

export default function ToDoList() {
    const toDos = useSelector((state) => state.toDos)
    console.log(toDos);
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}
            {
                toDos.map((todo) => <ToDo todo={todo} key={todo.id} />)
            }

        </div>
    )
}
