import React from 'react'
import { useDispatch } from 'react-redux';
import cancelImg from "../assets/images/cancel.png"
import { colorSelected, deleted, toggled } from '../redux/todos/actions';

export default function ToDo({ todo }) {
    const { text, completed, color, id } = todo;

    const dispatch = useDispatch();

    // handle delete func
    const handelDelete = (id) => {
        dispatch(deleted(id))
    };

    //handle toggled func
    const handleToggled = (id) => {
        dispatch(toggled(id));
    };

    // handle color selected
    const handleColorSelected = (id, color) => {
        dispatch(colorSelected(id, color));
    };

    return (
        <div
            className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
        >
            <div
                className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500"
            >
                <input
                    onChange={() => handleToggled(id)}
                    checked={completed}
                    type="checkbox"
                    className="opacity-0 absolute rounded-full"
                />
                <svg
                    className={`${!completed && 'hidden'} fill-current w-3 h-3 text-green-500 pointer-events-none`}
                    viewBox="0 0 20 20"
                >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
            </div>

            <div className={`select-none flex-1 ${completed && 'line-through'}`}>{text}
            </div>

            {/* green */}
            <div onClick={() => handleColorSelected(id, "green")}
                className={`${color === "green" && 'bg-green-500'} flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500`}
            ></div>

            {/* yellow */}
            <div
                onClick={() => handleColorSelected(id, "yellow")}
                className={`${color === "yellow" && 'bg-yellow-500'} flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500`}
            ></div>

            {/* red */}
            <div
                onClick={() => handleColorSelected(id, "red")}
                className={`${color === "red" && 'bg-red-500'} flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500`}
            ></div>

            <img
                onClick={() => handelDelete(id)}
                src={cancelImg}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
            />
        </div>
    )
}
