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
