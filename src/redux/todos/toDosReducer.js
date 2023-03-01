import { ADDED, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECTED, DELETED, TOGGLED } from "./actionTypes";
import { initialState } from "./initialState";

//id generator
const nextTodoId = (toDos) => {
    const maxId = toDos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
    return maxId + 1;
};

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload
                }
            ];

        case TOGGLED:
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return { ...todo };
                }
                else {
                    return {
                        ...todo, completed: !todo.completed
                    }
                };
            });

        case COLOR_SELECTED:
            return state.map((todo) => {
                if (todo.id !== action.payload.id) {
                    return { ...todo };
                }
                else {
                    return {
                        ...todo, color: action.payload.color
                    }
                };
            });

        case DELETED:
            return state.filter((todo) => todo.id !== action.payload);

        case ALL_COMPLETED:
            return state.map((todo) => {
                return {
                    ...todo, completed: true
                };
            });

        case CLEAR_COMPLETED:
            return state.filter((todo) => !todo.completed);
        default:
            return state;
    };
};

export default toDoReducer;