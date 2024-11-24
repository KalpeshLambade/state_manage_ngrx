import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.page.html',
  styleUrls: ['./counter.page.scss'],
})
export class CounterPage implements OnInit {


  constructor() { }

  ngOnInit() {
    console.log(14);
  }

  increment(){

  }

  decrement(){

  }

  reset(){
    
  }

}
