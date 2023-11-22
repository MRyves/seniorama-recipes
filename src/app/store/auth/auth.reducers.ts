import User from "../../models/User.model";
import {createReducer, on} from "@ngrx/store";
import {AuthActions} from "./auth.actions";

export interface AuthState {
    currentUser: User | null;
    error: string | null;
    loading: boolean;
}

const initialState: AuthState = {
    currentUser: null,
    error: null,
    loading: false,
}

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state) => {
        return {...state, loading: true};
    }),
    on(AuthActions.loginSuccess, (state) => {
        return {...state, loading: false, error: null};
    }),
    on(AuthActions.loginFailure, (state, {msg}) => {
        return {currentUser: null, error: msg, loading: false};
    }),
    on(AuthActions.setUser, (state, {user}) => {
        return {currentUser: user, error: null, loading: false};
    }),
    on(AuthActions.logout, () => {
        return {currentUser: null, error: null, loading: false};
    }),
)
