import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Recipe } from 'src/app/models/recipes';

export const receipeAction = createActionGroup({
  source: 'Recipe API',
  events: {
    'Load recipe': emptyProps(),
    'Load recipe success': props<{ payload: Recipe[] }>(),
    'Load recipe failed': emptyProps(),
  },
});
