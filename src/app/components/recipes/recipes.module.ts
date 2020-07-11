import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesService } from '../../services/recipes/recipes.service';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesItemComponent,
    RecipesListComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ],
  providers: [RecipesService],
  exports: [
    RecipesComponent,
    RecipesItemComponent,
    RecipesListComponent
  ]
})
export class RecipesModule {}
