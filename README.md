# Initial State and Reducer

1. First, define the starting point of our game. The player begins on day 0 at kilometer 0 with 100 units of supplies.

Define an initialWagonState with three properties:
  - supplies starting at 100
  - distance travelled, starting at 0
  - days on the road, starting at 0

Note: Maybe build an object literal?

```javascript
const initialWagonState = {
  supplies: 100,
  distance_travelled: 0, 
  days_on_road: 0
};
```

2. Define an empty reducer that will manage the state of the game. You can give it any name you prefer. 
Note: I chose the name appReducer in my function in line with the Redux documentation.

Like any Redux reducer, it should be a function with state and action parameters. It should set state to initialWagonState if no value is provided.

[Redux documentation on reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)

```javascript
export default function appReducer(state = initialWagonState, action) {
  switch (action.type) {
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}
```

3. Add a switch statement to your reducer. The default case should return the state.
Note: The switch statement was added, according to the Redux documentation on reducers link above.

4. A player may gather supplies, which takes them a day and doesn’t cover any distance.

If the action.type is 'gather', return a new state object with:
  - 15 more supplies
  - The same distance
  - 1 more day

Make sure to return a new object to comply with the three rules of reducers.
Note: Nested inside my switch (action.type) and using the hint given, I inserted the following object:

```javascript
case 'gather': {
  return { ...state,
    supplies: state.supplies + 15,
    distance_travelled: state.distance_travelled + 0,
    days_on_road: state.days_on_road + 1
  }  
}
```


