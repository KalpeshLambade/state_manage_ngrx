import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';

export interface Counter {
  count: number;
}

//Initial State
export const initialState: Counter = {
  count: 0,
};

// Reducer
export const counterReducer = createReducer(
  initialState,
  on(
    increment,
    (state): Counter => ({
      ...state,
      count: state.count + 1,
    })
  ),
  on(
    decrement,
    (state): Counter => ({
      ...state,
      count: state.count - 1,
    })
  ),
  on(
    reset,
    (state): Counter => ({
      ...state,
      count: 0,
    })
  )
);
