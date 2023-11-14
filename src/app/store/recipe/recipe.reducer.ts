import RecipeModel from "../../models/Recipe.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {RecipeActions} from "./recipe.actions";

export interface RecipesState extends EntityState<RecipeModel> {
}

function selectId(recipe: RecipeModel) {
  return recipe.uid!;
}

export const adapter: EntityAdapter<RecipeModel> = createEntityAdapter<RecipeModel>({
  selectId,
});

const initialState = adapter.getInitialState();

export const recipeReducer = createReducer(
  initialState,
  on(RecipeActions.added, (state, {payload}) => {
    return adapter.addOne(payload, state);
  }),
  on(RecipeActions.modified, (state, {payload}) => {
    return adapter.updateOne(payload, state);
  }),
  on(RecipeActions.removed, (state, {payload}) => {
    return adapter.removeOne(payload.uid!, state);
  })
);

export const selectRecipesState = createFeatureSelector<RecipesState>('recipes');

export const {selectIds, selectEntities, selectAll, selectTotal} =
  adapter.getSelectors(selectRecipesState);

export const selectRecipe = (uid: string) =>
  createSelector(selectEntities,
    state => state[uid]);



