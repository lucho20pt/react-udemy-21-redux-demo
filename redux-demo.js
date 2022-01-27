const redux = require("redux");

// TODO: Store, Reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};
const store = redux.createStore(counterReducer);

// TODO: Subscription, getState
const counterSubscription = () => {
  const lastState = store.getState();
  console.log(lastState);
};

store.subscribe(counterSubscription);

// TODO: Dispatcher, action type
store.dispatch({ type: "increment" });
