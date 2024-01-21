import { Action, createReducer, on } from "@ngrx/store";
import { LoginState } from "./LoginState";
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.action";
import { AppInitialState } from "./AppInitialState";

const initialState : LoginState = AppInitialState.login;

const reducer = createReducer(initialState,
  on(recoverPassword, currentState => {
    return {
        ...currentState,
        error: null,
        isRecoveredpassword : false,
        isRecoveringPassword: true

    };
  }),  
  on(recoverPasswordSuccess, currentState => {
    return {
        ...currentState,
        error: null,
        isRecoveredpassword : false,
        isRecoveringPassword: true

    };
  }),
  on(recoverPasswordFail, (currentState, action) => {
    return {
        ...currentState,
        error: action.error,
        isRecoveredpassword : false,
        isRecoveringPassword: true

    };
  }),
    )

    export function loginReducer(state:LoginState,action: Action){
        return reducer (state, action)
    }