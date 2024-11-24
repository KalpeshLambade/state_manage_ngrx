import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { receipeAction } from './states/recipe/recipe.action';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.loadProducts();
  }

  async loadProducts() {
    this.store.dispatch(receipeAction.loadRecipe());
  }
}
