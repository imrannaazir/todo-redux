const { combineReducers } = require("redux");
const { default: filterReducer } = require("./filters/filtersReducer");
const { default: toDoReducer } = require("./todos/toDosReducer");

const rootReducer = combineReducers({
    toDos: toDoReducer,
    filters: filterReducer
});

export default rootReducer;

