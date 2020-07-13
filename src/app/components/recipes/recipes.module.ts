import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesService } from '../../services/recipes/recipes.service';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesItemComponent,
    RecipesListComponent,
    CreateRecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ],
  providers: [RecipesService],
  exports: [
    RecipesComponent,
    RecipesItemComponent,
    RecipesListComponent,
    CreateRecipeComponent
  ]
})
export class RecipesModule {}
