import React from 'react'
import ToDo from './ToDo'

export default function ToDoList() {
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}
            <ToDo />

        </div>
    )
}
