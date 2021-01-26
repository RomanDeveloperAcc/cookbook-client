import { Action, createAction, props } from "@ngrx/store";

export enum SignUpActions {
  SIGN_UP = '[SIGN_UP] Sign Up',
  SIGN_UP_SUCCESS = '[SIGN_UP] Sign Up Success',
  SIGN_UP_FAILURE = '[SIGN_UP] Sign Up Failure',
}

export const SignUpAction = createAction(
  SignUpActions.SIGN_UP,
  props<{ email: string, password: string }>()
);

export const SignUpSuccessAction = createAction(
  SignUpActions.SIGN_UP_SUCCESS,
  props<{ payload: any }>()
);

export const SignUpFailureAction = createAction(
  SignUpActions.SIGN_UP_FAILURE,
  props<Error>()
);

// export type SignUpAction =
//   SignUpDefaultAction |
//   SignUpSuccessAction |
//   SignUpFailureAction;
