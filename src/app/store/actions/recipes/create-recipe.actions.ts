import { createAction, props } from '@ngrx/store';
import { RecipeModel } from "../../../models/recipes/recipe.model";

export const CreateRecipe = createAction(
  '[CreateRecipe] Create Recipe',
  props<{ data: any }>()
);

export const CreateRecipeSuccess = createAction(
  '[CreateRecipe] Create Recipe Success',
  props<{ data: RecipeModel }>()
);

export const CreateRecipesFailure = createAction(
  '[CreateRecipe] Create Recipe Failure',
  props<{ error: Error }>()
);
