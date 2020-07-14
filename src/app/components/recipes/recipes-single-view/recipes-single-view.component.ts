import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../../models/recipes/recipe.model';
import { RecipesService } from '../../../services/recipes/recipes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipes-single-view',
  templateUrl: './recipes-single-view.component.html',
  styleUrls: ['./recipes-single-view.component.scss']
})
export class RecipesSingleViewComponent implements OnInit {
  public recipeItem: RecipeModel;
  private recipeId: number;
  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.params.id;
    this.getRecipeitem();
  }

  private getRecipeitem(): void {
    this.recipesService.getOneRecipe(this.recipeId)
      .subscribe(data => this.recipeItem = data);
  }
}
