import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { RecipeModel } from "../../../models/recipes/recipe.model";
import { Action } from "@ngrx/store";
import * as CreateRecipeActions from '../../actions/recipes/create-recipe.actions';
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class CreateRecipeEffects {
  private backEndUrl = environment.backendLink;

  constructor(private http: HttpClient, private action$: Actions) {}

  CreateRecipe$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(CreateRecipeActions.CreateRecipe),
      mergeMap((action) =>
        this.http.post<RecipeModel>(`${this.backEndUrl}/recipes`, action.data).pipe(
          map((item) => CreateRecipeActions.CreateRecipeSuccess({ data: item })),
          catchError((error) => of(CreateRecipeActions.CreateRecipesFailure({ error })))
        )
      )
    )
  );
}
