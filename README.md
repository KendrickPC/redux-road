# Initial State and Reducer

1. First, define the starting point of our game. The player begins on day 0 at kilometer 0 with 100 units of supplies.

Define an initialWagonState with three properties:

supplies starting at 100
distance travelled, starting at 0
days on the road, starting at 0

Note: Maybe build an object literal?

```javascript
const initialWagonState = {
  supplies: 100,
  distance_travelled: 0, 
  days_on_road: 0
};

```