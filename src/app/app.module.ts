import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesModule } from './components/recipes/recipes.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./components/shared/shared.module";
import { HomepageModule } from "./components/homepage/homepage.module";
import { AboutPageModule } from "./components/about-page/about-page.module";
import { AuthModule } from "./components/auth/auth.module";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { RecipeReducer } from "./store/reducers/recipes/recipe-list.reducer";
import { EffectsModule } from "@ngrx/effects";
import { RecipeListEffects } from "./store/effects/recipes/recipe-list.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    HomepageModule,
    AboutPageModule,
    AuthModule,
    StoreModule.forRoot({ recipes: RecipeReducer }, {}),
    EffectsModule.forRoot([RecipeListEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
