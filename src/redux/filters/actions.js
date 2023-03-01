import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes"

export const colorChanged = (colors, changedColor) => {
    return {
        type: COLOR_CHANGED,
        payload: { colors, changedColor }
    };
};

export const statusChanged = (toDoStatus) => {
    return {
        type: STATUS_CHANGED,
        payload: toDoStatus
    };
};