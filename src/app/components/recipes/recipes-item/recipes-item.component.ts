import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { RecipeModel } from '../../../models/recipes/recipe.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CancelPopupComponent } from '../../shared/cancel-popup/cancel-popup.component';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
  @Input() public recipeItem: RecipeModel;
  @Input() public home = false;
  @Input() public history = false;

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {}

  public updateItem(title: string, text: string, id: number): void {
    const tempObject = {
      title,
      description: text
    };
    this.recipesService.setUpdateData(tempObject);
    this.recipesService.setUpdateId(id);
    this.recipesService.setHistoryItem(false);
  }

  public openDialogWindow(e: Event): void {
    e.stopPropagation();
    this.dialogRef.open(CancelPopupComponent, {
      width: '30%',
    });
    this.recipesService.setRecipeId(this.recipeItem?.recipeId);
  }

  public goToSingleView(): void {
    if (this.history) {
      this.recipesService.setHistoryItem(true);
      this.router.navigate([`/recipes/history/${this.recipeItem.recipeId}`]);
    } else {
      this.router.navigate([`/recipes/${this.recipeItem.recipeId}`]);
    }
  }
}
