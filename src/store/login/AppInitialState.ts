import { AppState } from "../AppState";

export const AppInitialState: AppState ={
    loading:{
        show: false
    },
   login:{
    isRecoveredpassword: false,
    isRecoveringPassword: false,
    isLoggedIn: false,
    isLoggingIn: false,
    error: null,
    user: null,
    newProperty: null
   }
}