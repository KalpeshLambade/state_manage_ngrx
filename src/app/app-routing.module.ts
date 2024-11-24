import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full'
  },
  {
    path: 'counter',
    loadChildren: () => import('./pages/counter/counter.module').then( m => m.CounterPageModule)
  },
  {
    path: 'recipe',
    loadChildren: () => import('./pages/recipe/recipe.module').then( m => m.RecipePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
