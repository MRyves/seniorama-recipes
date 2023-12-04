import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {FavoriteModel} from "../../models/Favorite.model";
import {FavoritesActions} from "./favorites.actions";

export interface FavoritesState {
  favorites: FavoriteModel[],
}

const initialState: FavoritesState = {
  favorites: [],
}

export const favoritesReducer = createReducer(
  initialState,
  on(FavoritesActions.added, (state, {payload}) => {
    return {favorites: [...state.favorites, payload]}
  }),
  on(FavoritesActions.removed, (state, {payload}) => {
    return {favorites: [...state.favorites.filter(i => i.uid !== payload.uid)]};
  }),
);

const favoritesState = createFeatureSelector<FavoritesState>('favorites');

export const fromFavorites = {
  selectAll: createSelector(favoritesState, state => state.favorites)
}


