import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipesSingleViewComponent } from './recipes-single-view/recipes-single-view.component';

const recipesRoutes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipesListComponent
      },
      {
        path: 'create-recipe',
        component: CreateRecipeComponent
      },
      {
        path: ':id',
        component: RecipesSingleViewComponent
      },
      {
        path: 'history/:id',
        component: RecipesSingleViewComponent
      },
      {
        path: '',
        redirectTo: 'recipes',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
