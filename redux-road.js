const initialWagonState = {
  supplies: 100,
  distance_travelled: 0, 
  days_on_road: 0
};

function appReducer(state = initialWagonState, action) {
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'gather': {
      return { ...state,
        supplies: state.supplies + 15,
        distance_travelled: state.distance_travelled + 0,
        days_on_road: state.days_on_road + 1
      }
    }
    case 'travel': {
      if (state.supplies - (20 * action.payload) < 0) {
        return {...state}
      } else {
        return { ...state,
          supplies: state.supplies - (20 * action.payload),
          distance_travelled: state.distance_travelled + (10 * action.payload),
          days_on_road: state.days_on_road + action.payload
        }
      }
    }
    case 'tippedWagon': {
      return { ...state,
        supplies: state.supplies - 30,
        distance_travelled: state.distance_travelled,
        days_on_road: state.days_on_road + 1
      }
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};

console.log("\nCalling initial state")
let currentState = appReducer(initialWagonState, {})
console.log(currentState)

console.log("\nFirst day:")
currentState = appReducer(currentState, {type: 'travel', payload: 1})
console.log(currentState)

console.log("\nSecond day:")
currentState = appReducer(currentState, {type: 'gather', payload: undefined})
console.log(currentState)

console.log("\nThird day:")
currentState = appReducer(currentState, {type: 'tippedWagon', payload: undefined})
console.log(currentState)

console.log("\nThe following day:")
currentState = appReducer(currentState, {type: 'travel', payload: 3})
console.log(currentState)

console.log("\nGoing Negative:")
currentState = appReducer(currentState, {type: 'travel', payload: 5})
console.log(currentState)








