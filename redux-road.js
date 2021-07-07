const initialWagonState = {
  supplies: 100,
  distance_travelled: 0, 
  days_on_road: 0
};

export default function appReducer(state = initialWagonState, action) {
  switch (action.type) {
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};


