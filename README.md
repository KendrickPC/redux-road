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
Note: I chose the name appReducer in my function in line with the Redux documentation. Remove export default from the front of the function declaration as it will not run this script locally on the computer.

  Like any Redux reducer, it should be a function with state and action parameters. It should set state to initialWagonState if no value is provided.

  [Redux documentation on reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)

```javascript
function appReducer(state = initialWagonState, action) {
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

  Hint Below:
```javascript
switch (action.type) {
  case 'eat': {
    return {
      ..state,
      food: state.food - 10
    };
  }
  default: {
    return state;
  }
}
```
  And my code for step 4 below:

```javascript
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
```

  Note: For the above code, [redux reducer documentation](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers) uses three dots, but our hint only uses two dots. I chose to go with three dots before the state copy.

5. A player may travel for any number of days, which costs 20 supplies for each day but adds 10 kilometers each day.

  If the action.type is 'travel', assume that the action.payload contains the number of days to travel. Return a new state object with:
    - 20 less supplies for each day
    - 10 more kilometers of distance traveled for each day
    - The number of days added to days

6. If a player drives off-road or across deep rivers, the wagon may tip! You’ll need to spend some supplies and a day to fix it.

  If the action.type is 'tippedWagon', return a new state object with:
    - 30 less supplies
    - The same distance
    - 1 more day

### Play

7. Let’s try our game out.

  Start a game by calling the reducer with an undefined state and empty action object and storing the result in a new variable called wagon (Initialize it with let). Then print the wagon value to the console.

  Our initial wagon state should look like this:
```javascript
{
  supplies: 100,
  distance: 0,
  days: 0
}
```

  Note: Call the reducer with undefined and {} as arguments to get the initial state of the wagon.

```javascript 
console.log(appReducer(undefined, {}))
```

8. Our first day will be dedicated to travel.

Call the reducer with the wagon state and an action with type: 'travel' and payload: 1.
Store the returned new state back into wagon.
Print the new state.
Our wagon state should look like this:
```javascript
{
  supplies: 80,
  distance: 10,
  days: 1
}
```

```javascript
console.log(appReducer(initialWagonState, {type: 'travel', payload: 1}))
// the above and below calls to our reducer give the same results
console.log(appReducer(undefined, {type: 'travel', payload: 1}))
```

9. On the second day, we stop to gather supplies.

Call the reducer with the new wagon state and an action with type: 'gather' and no payload.
Store the new state back into wagon.
Print the new state.
Our wagon state should look like this:
```javascript
{
  supplies: 95,
  distance: 10,
  days: 2
}
```
Hint: You can overwrite your state variable like so:
```javascript
let myState = reducer(undefined, {});
myState = reducer(myState, action1);
myState = reducer(myState, action2);
```
My code, to update the current state, as follows:
```javascript
let currentState = appReducer(initialWagonState, {})
currentState = appReducer(currentState, {type: 'travel', payload: 1})
currentState = appReducer(currentState, {type: 'gather', payload: undefined})
console.log(currentState)
```

10. On the third day, we try to ford a rushing river…and our wagon tips over, spilling some supplies.

Call the reducer with the new wagon state and an action with type: 'tippedWagon'.
Store the new state back into wagon
Print the new state.

Our wagon state should look like this:

```javascript
{
  supplies: 65,
  distance: 10,
  days: 3
}
```

```javascript
currentState = appReducer(currentState, {type: 'tippedWagon', payload: undefined})
console.log("\nThird day:")
console.log(currentState)
```

11. On the following day, we set out for a long 3 days of travel.

Call the reducer with the new wagon state and an action with type: 'travel' and a payload: 3.
Store the new state back into wagon.
Print the new state.
Our final wagon state should look like this:
```javascript
{
  supplies: 5,
  distance: 40,
  days: 6
}
```

```javascript
console.log("\nThe following day:")
currentState = appReducer(currentState, {type: 'travel', payload: 3})
console.log(currentState)
```

### Additions and Extra Credit

12. Currently, the player can continue traveling even if their supplies are negative! Fix this in the 'travel' case.

If there are not sufficient supplies to travel the given number of days, return the current state.

```javascript
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
```

13. Well done! You’ve taken great strides on the Redux Road. Watch your supplies and watch out for snakes!

If you’d like to keep practicing, try implementing these features:

13a. Add a cash property, beginning with 200 for the initial state
```javascript
const initialWagonState = {
  supplies: 100,
  distance_travelled: 0, 
  days_on_road: 0,
  cash: 200
};
```

13b. Add a 'sell' case: Players can give away 20 supplies to gain 5 cash
```javascript
case 'sell': {
  if ((state.supplies - 20) < 0) {
    return {...state}
  } else {
    return {...state,
      supplies: state.supplies - 20,
      cash: state.cash + 10
    }
  }
}
```

13c. Add a 'buy' case: Players can gain 25 supplies at the cost of 15 cash
```javascript
case 'buy': {
  if ((state.cash - 15) < 0) {
    return {...state}
  } else {
    return {...state,
      supplies: state.supplies + 25,
      cash: state.cash - 15
    }
  }
}
```
Note: For Buy test (negative cash scenario), change the initialWagonState cash to 14 or less.

13d. Add a 'theft' case: Outlaws steal half of the player’s cash
```javascript
// Dividing by zero returns undefined
case 'theft': {
  if (state.cash === 0) {
    return {...state}
  } else {
    return {...state,
      cash: state.cash / 2
    }
  }
}
```



