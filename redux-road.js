const initialWagonState = {
  supplies: 100,
  distance_travelled: 0, 
  days_on_road: 0
};

export default function appReducer(state = initialWagonState, action) {
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'gather': {
      return { ...state,
        supplies: state.supplies + 15,
        distance_travelled: state.distance_travelled + 0,
        days_on_road: state.days_on_road + 1
      }  
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};


// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'todos/todoAdded': {
      // We need to return a new state object
      return {...state, todos: [...state.todos, {id: nextTodoId(state.todos),text: action.payload,completed: false}]}
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}