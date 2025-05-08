import { createActionGroup, props } from "@ngrx/store";

export const LoginActions = createActionGroup({
    source:'Login',
    events:{
        'Login': props<{ username: string, password: string}>(),
        'Login Failure': props<{ error: string}>()
    }
})


