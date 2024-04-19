import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  //Reducers is an object, a map you could say, of all the reducers this slice needs
  reducers: {
    //These methods will be called for you by Redux, and they will receive the current state.
    increment(state) {
      state.counter++;
      /*We still must not manipulate the existing state but the good thing is when using Redux toolkit
and its functions like create slice, we can't accidentally manipulate the existing state.
Because Redux toolkit internally uses another package, called imgur, which will detect code like this
and which will automatically clone the existing state, create a new state object, keep all the state
which we're not editing, and override the state which we are editing in an immutable way.
So we still have immutable code here even though it doesn't look like it because of this internally used package
 */
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
