import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// const store = createStore(counterSlice.reducer); //wouldn't be good if we have multiple reducers. So, instead we can use configureStore

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, //key can be anything
});

export default store;
