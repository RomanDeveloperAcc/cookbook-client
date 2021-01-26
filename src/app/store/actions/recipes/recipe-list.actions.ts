import { createAction, props } from '@ngrx/store';
import { RecipeModel } from "../../../models/recipes/recipe.model";

export const GetRecipeListAction = createAction(
  '[RecipeList] Get Recipe List'
);

export const GetRecipeListActionSuccess = createAction(
  '[RecipeList] Get Recipe List Success',
  props<{ data: RecipeModel[] }>()
);

export const GetRecipeListActionFailure = createAction(
  '[RecipeList] Get Recipe List Failure',
  props<{ error: Error }>()
);
