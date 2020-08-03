import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-single-view',
  templateUrl: './recipes-single-view.component.html',
  styleUrls: ['./recipes-single-view.component.scss']
})
export class RecipesSingleViewComponent implements OnInit {
  public recipeItem;
  public recipes = [];
  private recipeId: number;
  public historyItem = false;
  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.params.id;
    this.getRecipeItem();
    if (!this.recipesService.historyItem) {
      this.getHistoryRecipes();
    }
    this.recipesService.setHistoryItem(false);
  }

  private getRecipeItem(): void {
    if (this.recipesService.historyItem) {
      this.recipesService.getOneHistoryRecipe(this.recipeId)
        .subscribe(data => this.recipeItem = data);
    } else {
      this.recipesService.getOneRecipe(this.recipeId)
        .subscribe(data => this.recipeItem = data);
    }
  }

  private getHistoryRecipes(): void {
    if (!this.historyItem) {
      this.recipesService.getHistoryRecipes(this.recipeId)
        .subscribe(data => this.recipes = data);
    }
  }
}
