import { createSelector } from '@ngrx/store';
import { AppState } from '../app.store';
import { Counter } from './counter.reducer';

export const selectCounterState = (state: AppState) => state.counter;

export const selectCounter = createSelector(
  selectCounterState,
  (state: Counter) => state.count
);
