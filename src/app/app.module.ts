import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/general/home/home.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './components/recipes/recipes-item/recipes-item.component';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesListComponent,
    RecipesItemComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
