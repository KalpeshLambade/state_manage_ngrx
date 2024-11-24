import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ServerService } from 'src/app/services/api/server.service';
import { receipeAction } from './recipe.action';

@Injectable()
export class RecipeEffects {
  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(receipeAction.loadRecipe),
      exhaustMap(() =>
        this.serverService.getAllRecipes().pipe(
          map((recipe) => receipeAction.loadRecipeSuccess({ payload: recipe })),
          catchError(async () => receipeAction.loadRecipeFailed())
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private serverService: ServerService
  ) {}
}
