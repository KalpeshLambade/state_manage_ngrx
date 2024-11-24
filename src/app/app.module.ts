import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { provideHttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffects } from './states/recipe/recipe.effect';
import { recipeReducer } from './states/recipe/recipe.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    StoreModule.forRoot({counter : counterReducer , recipe : recipeReducer}), 
    EffectsModule.forRoot(RecipeEffects)
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
