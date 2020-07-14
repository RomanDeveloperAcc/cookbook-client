import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { RecipeModel } from '../../../models/recipes/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
  @Input() public recipeItem: RecipeModel;
  @Input() public home = false;

  constructor(private recipesService: RecipesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public updateItem(title: string, text: string, id: number): void {
    const tempObject = {
      title,
      description: text
    };
    this.recipesService.setUpdateData(tempObject);
    this.recipesService.setUpdateId(id);
  }

  public removeRecipe(id: number): void {
    this.recipesService.deleteRecipe(id)
      .subscribe(() => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/recipes']);
      });
  }

  public goToSingleView(): void {
    this.router.navigate([`/recipes/${this.recipeItem.recipeId}`]);
  }
}
