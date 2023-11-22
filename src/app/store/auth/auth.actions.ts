import {createActionGroup, emptyProps, props} from "@ngrx/store";
import User from "../../models/User.model";

export const AuthActions = createActionGroup({
        source: 'Auth',
        events: {
            getAuthState: emptyProps(),
            login: props<{ credentials: { email: string, password: string } }>(),
            loginFailure: props<{ msg: string }>(),
            loginSuccess: emptyProps(),
            setUser: props<{ user: User }>(),
            logout: emptyProps(),
        }
    }
)
