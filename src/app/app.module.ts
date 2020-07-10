import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/general/home/home.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './components/recipes/recipes-item/recipes-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesListComponent,
    RecipesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
