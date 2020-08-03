import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesService } from '../../services/recipes/recipes.service';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadMorePipe } from '../../pipes/read-more.pipe';
import { RecipesSingleViewComponent } from './recipes-single-view/recipes-single-view.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesItemComponent,
    RecipesListComponent,
    CreateRecipeComponent,
    ReadMorePipe,
    RecipesSingleViewComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [RecipesService],
  exports: [
    RecipesComponent,
    RecipesItemComponent,
    RecipesListComponent,
    CreateRecipeComponent,
    ReadMorePipe,
    RecipesSingleViewComponent
  ]
})
export class RecipesModule {}
