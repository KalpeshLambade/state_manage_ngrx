import { createSelector } from "@ngrx/store";
import { AppState } from "../app.store";
import { Recipe } from "src/app/models/recipes";

export const selectRecipeState = (state: AppState) => state.recipe;

export const selectRecipe = createSelector(
    selectRecipeState,
    (state: Recipe[]) => state 
);
