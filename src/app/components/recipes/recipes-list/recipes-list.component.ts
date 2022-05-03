import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { RecipeModel } from '../../../models/recipes/recipe.model';
import { filter, tap } from "rxjs/operators";
import { RecipeState } from "../../../store/reducers/recipes/recipe-list.reducer";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as RecipesActions from '../../../store/actions/recipes/recipe-list.actions'


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipes: RecipeModel[] = [];
  private recipe$: Observable<RecipeState>;

  constructor(private recipesService: RecipesService,
              private store: Store<{ recipes: RecipeState }>)
  {
    this.recipe$ = store.pipe(select('recipes'));
  }

  ngOnInit(): void {
    //this.getAllRecipes();
    this.recipe$.pipe(
      filter(data => !!data),
      tap((data) => {
        this.recipes = [...data?.recipes]
      })
    ).subscribe();

    this.store.dispatch(RecipesActions.GetRecipeListAction());
  }

  // private getAllRecipes(): void {
  //   this.recipesService.getRecipes().pipe(
  //     tap((data) => this.recipes = data)
  //   ).subscribe();
  // }
}
