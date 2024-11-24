import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Recipe } from 'src/app/models/recipes';
import { selectRecipe } from 'src/app/states/recipe/recipe.selector';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
   recipes$ = this.store.select<Recipe[]>(selectRecipe as any);

  constructor(private store: Store) {}

  ngOnInit() {
    this.loadRecipes();
  }

  
  loadRecipes() {
   
  }

}
