import {FormikHelpers} from "formik";
import {AppDispatch} from "@/store";
import {FormProps} from "@moduleAuth/views/LoginView/LoginView.types.ts";

export interface User {
    _id?: string;
    activationLink: string;
    email: string;
    username: string;
    firstName: string;
    image: string;
    isActivated: string;
    lastName: string;
    roles: Array<string>;
}


export interface AuthState {
    accessToken: string;
    user: User | null;
}


export interface SubmitProps {
    setSubmitting: FormikHelpers<FormProps>['setSubmitting'];
    dispatch: AppDispatch;
    setFieldError: FormikHelpers<FormProps>['setFieldError'];
}