import { Action, createReducer, on } from '@ngrx/store';
import * as RecipesActions from '../../actions/recipes/recipe-list.actions'
import { RecipeModel } from "../../../models/recipes/recipe.model";


export const recipeListFeatureKey = 'recipeList';

export interface RecipeState {
  recipes: RecipeModel[];
  error: Error
}

export const initialState: RecipeState = {
  recipes: [],
  error: undefined
};


export const reducer = createReducer(
  initialState,
  on(RecipesActions.GetRecipeListAction, state => state),
  on(RecipesActions.GetRecipeListActionSuccess, (state: RecipeState, { data}) => {
    return { ...state, recipes: [...data] }
  }),
  on(RecipesActions.GetRecipeListActionFailure, (state: RecipeState, {error}) => {
    return { ...state, error: error }
  })
);

export function RecipeReducer(state: RecipeState | undefined, action: Action) {
  return reducer(state, action);
}

