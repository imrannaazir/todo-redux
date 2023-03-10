import { ADDED, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECTED, DELETED, TOGGLED } from "./actionTypes"

export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText
    };
};

export const toggled = (id) => {
    return {
        type: TOGGLED,
        payload: id
    };
};

export const deleted = (id) => {
    return {
        type: DELETED,
        payload: id
    };
};

export const colorSelected = (id, color) => {
    return {
        type: COLOR_SELECTED,
        payload: { id, color }
    };
};

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    };
};

export const allCompleted = () => {
    return {
        type: ALL_COMPLETED
    };
};