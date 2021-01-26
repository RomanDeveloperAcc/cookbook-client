import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { RecipesModule } from "../recipes/recipes.module";
import { HomepageRoutingModule } from "./homepage-routing.module";
import { RecipesItemComponent } from "../recipes/recipes-item/recipes-item.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,

    HomepageRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomepageModule { }
