import { Action, createReducer, on } from '@ngrx/store';
import { RecipeModel } from "../../../models/recipes/recipe.model";
import * as CreateRecipeActions from '../../actions/recipes/create-recipe.actions';

export const createRecipeFeatureKey = 'createRecipe';

export interface State {
  data: RecipeModel;
  error: Error;
}

export const initialState: State = {
  data: undefined,
  error: undefined
};


export const reducer = createReducer(
  initialState,
  on(CreateRecipeActions.CreateRecipe, state => state),
  on(CreateRecipeActions.CreateRecipeSuccess, (state: State, { data }) => {
    return { ...state, data }
  }),
  on(CreateRecipeActions.CreateRecipesFailure, (state: State, { error }) => {
    return { ...state, error }
  })
);

