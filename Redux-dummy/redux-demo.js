const redux = require("redux");

//setting state with initial default value(mandatory)
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
//we're just pointing out subscriber method. Both the subscriber and reducer method are executed by redux itself

//creating and dispatching an action

store.dispatch({ type: "increment" }); //outputs { counter: 1 }
store.dispatch({ type: "decrement" });
