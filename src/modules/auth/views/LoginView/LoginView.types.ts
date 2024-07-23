import {FormikHelpers} from "formik";
import {AppDispatch} from "@/store";

export interface FormProps {
  username: string;
  password: string;
}


export interface SubmitProps {
  setSubmitting: FormikHelpers<FormProps>['setSubmitting'];
  dispatch: AppDispatch;
  setFieldError: FormikHelpers<FormProps>['setFieldError'];
}