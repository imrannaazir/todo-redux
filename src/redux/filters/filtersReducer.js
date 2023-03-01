import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";

const filterReducer = (state, action) => {
    switch (action.type) {
        case STATUS_CHANGED:
            return
        case COLOR_CHANGED:
            return
        default:
            return state;
    };
};

export default filterReducer;