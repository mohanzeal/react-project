// install redux(yarn add redux) and run via node
// node ./src/redux-node.js
const redux = require("redux");

// state
const initialState = {
  counter: 0,
};

// reducer
const reducer = (state = initialState, action) => {
  if (action.type === "INC_COUNT") {
    state = {
      ...initialState,
      counter: state.counter + 1,
    };
  } else if (action.type === "ADD_COUNT") {
    state = {
      ...initialState,
      counter: state.counter + action.payload,
    };
  }

  return state;
};

// store
const store = redux.createStore(reducer);

// subscription
// subscription should be declared before dispatching an action
// if you put subscribe call below dispatch subscribe will not be called.
store.subscribe(() => {
  console.log("subscription", store.getState());
});

// actions
store.dispatch({ type: "INC_COUNT" });
store.dispatch({ type: "ADD_COUNT", payload: 5 });
store.dispatch({ type: "ADD_COUNT", payload: 10 });
store.dispatch({ type: "INC_COUNT" });
