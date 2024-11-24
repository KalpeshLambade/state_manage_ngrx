import { createReducer, on } from '@ngrx/store';
import { Recipe } from 'src/app/models/recipes';
import { receipeAction } from './recipe.action';

export const initialRecipe: Recipe[] = [];

export const recipeReducer = createReducer(
  initialRecipe,
  on(receipeAction.loadRecipeSuccess, (state, action): any => {
    return action.payload;
  })
);
