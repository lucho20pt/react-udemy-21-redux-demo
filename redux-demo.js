const redux = require("redux");

// TODO: Store, Reducer
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};
const store = redux.createStore(counterReducer);

// TODO: Subscription, getState


// TODO: Dispatcher, action type


