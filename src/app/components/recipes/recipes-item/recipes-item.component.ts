import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { RecipeModel } from '../../../models/recipes/recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
  @Input() public recipeItem: RecipeModel;
  @Input() public home = false;
  constructor() { }

  ngOnInit(): void {
  }

}
