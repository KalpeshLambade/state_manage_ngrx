import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../states/counter/counter.action';
import { selectCounter } from '../../states/counter/counter.selector';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.page.html',
  styleUrls: ['./counter.page.scss'],
})
export class CounterPage  {

  public counter$ = this.store.select<number>(selectCounter as (state: object) => number);

  constructor(private store: Store) {}


  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }

}
