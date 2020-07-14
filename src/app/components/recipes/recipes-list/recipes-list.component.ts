import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../../../services/recipes/recipes.service";
import {RecipeModel} from "../../../models/recipes/recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipes: RecipeModel[] = [];
  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.getAllRecipes();
  }

  private getAllRecipes(): void {
    this.recipesService.getRecipes()
      .subscribe(data => this.recipes = data);
  }

}
