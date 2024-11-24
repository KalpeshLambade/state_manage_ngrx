import { Recipe } from "../models/recipes";
import { Counter } from "./counter/counter.reducer";

export interface AppState {
    counter : Counter,
    recipe: Recipe[]
}