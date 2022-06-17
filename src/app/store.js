import { configureStore } from '@reduxjs/toolkit';

import counterReducer, { counterActions } from './counter';
import authReducer from './auth';

// const initialState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state) {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggle(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// Action creators are generated for each case reducer function
export const { increment, decrement, increase, toggle } = counterActions;

export default configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});
