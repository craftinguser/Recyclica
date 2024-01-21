import { Action, createReducer, on } from "@ngrx/store";
import{hide,show} from './loading.action';
import { LoadingState } from "./LoadingState";


const intialstate: LoadingState ={
    show :false
}

const reducer  = createReducer(intialstate,
    
    on(show,()=>{
        return{show:true};
    }),
    on(hide,()=>{
        return{show:false};
    })
    );

    export function loadingReducer(state: LoadingState, action: Action){
        return reducer(state,action);
    }