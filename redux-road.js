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
    case 'travel': {
      return { ...state,
        supplies: state.supplies - (20 * action.payload),
        distance_travelled: state.distance_travelled + (10 * action.payload),
        days_on_road: state.days_on_road + action.payload
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


