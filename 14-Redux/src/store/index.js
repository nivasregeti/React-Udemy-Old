import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };
const counterReducer = (state = initialState, action) => {
  //the objects which we're returning here in the reducer will not merge with the existing state.
  //Instead, they override the existing state
  //for eg, if we remove showCounter in the below return, then showCounter will be undefined. So when try to increment, as showCounter is undefined, the toggle will be closed automatically
  if (action.type === "increment") {
    //never mutate the existing state. Always return a new state
    //for eg, we shouldn't simply do state.counter++ and then return state even though it works
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;

//in the bigger applications, we may mess up the with action types,
//also the more data(more different pieces of state) we have, the bigger our state objects get and  that means that we need to copy a lot of state
////for eg, when we update the counter we still need to copy and keep all the other state properties,
//and it also means that this reducer function gets longer and longer and all of a sudden we might have an unmaintainable big Redux file
//So, we use Redux-toolkit
