import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes"

export const colorChanged = (color, colorStatus) => {
    return {
        type: COLOR_CHANGED,
        payload: { color, colorStatus }
    };
};

export const statusChanged = (toDoStatus) => {
    return {
        type: STATUS_CHANGED,
        payload: toDoStatus
    };
};