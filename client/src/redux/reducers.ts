import { combineReducers } from 'redux';

// import todosReducer from './features/todos/todosSlice';
// import filtersReducer from './features/filters/filtersSlice';

const rootReducer = combineReducers({
  todos: (state = []) => state,
  filters: (state = []) => state,
});

export default rootReducer;
