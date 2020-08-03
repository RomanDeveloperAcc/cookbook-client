import { Component, Inject, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-popup',
  templateUrl: './cancel-popup.component.html',
  styleUrls: ['./cancel-popup.component.scss']
})

export class CancelPopupComponent implements OnInit {
  private recipeId: number;

  constructor(private recipesService: RecipesService,
              private router: Router,
              private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.recipeId = this.recipesService.recipeId;
  }


  public removeRecipe(): void {
    this.recipesService.deleteRecipe(this.recipeId)
      .subscribe(() => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/recipes']);
        this.closeDialogWindow();
      });
  }

  public closeDialogWindow(): void {
    this.dialogRef.closeAll();
  }
}
