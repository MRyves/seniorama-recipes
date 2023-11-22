import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./auth.reducers";

const authState = createFeatureSelector<AuthState>('auth');


export const fromAuth = {
    currentUser: createSelector(authState, (state) => state.currentUser),
    isLoggedIn: createSelector(authState, (state) => !!state.currentUser),
    error: createSelector(authState, (state) => state.error),
    isLoading: createSelector(authState, (state) => state.loading)
}
