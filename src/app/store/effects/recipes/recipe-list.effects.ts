import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { environment } from "../../../../environments/environment";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import * as RecipesActions from '../../../store/actions/recipes/recipe-list.actions'
import { catchError, map, mergeMap } from "rxjs/operators";
import { RecipeModel } from "../../../models/recipes/recipe.model";

@Injectable()
export class RecipeListEffects {
  private backEndUrl = environment.backendLink;

  constructor(private http: HttpClient, private action$: Actions) {}

  GetRecipes$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(RecipesActions.GetRecipeListAction),
      mergeMap((action) =>
        this.http.get<RecipeModel[]>(`${this.backEndUrl}/recipes`).pipe(
          map((data) => RecipesActions.GetRecipeListActionSuccess({ data })),
          catchError((error) => of(RecipesActions.GetRecipeListActionFailure({ error })))
        )
      )
    )
  );
}
