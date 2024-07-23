import {useNavigate} from "react-router-dom";
import {useLoginMutation} from "@/services/api/controllers/authApi";
import {setCredentials} from "@moduleAuth/store";
import * as Yup from "yup";
import {ApiError} from "@/services/api/controllers/authApi/authApi.types.ts";
import {FormProps, SubmitProps} from "@moduleAuth/views/LoginView/LoginView.types.ts";



export const useLoginView = () => {
  const [login, {isLoading, error}] = useLoginMutation();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values: FormProps, {setSubmitting, dispatch, setFieldError}: SubmitProps) => {
    try {
      const userData = await login({username: values.username, password: values.password}).unwrap();
      dispatch(setCredentials({
        accessToken: userData.accessToken,
        refreshToken: userData.refreshToken,
        user: userData.user,
      }));

      localStorage.setItem('token', userData.accessToken);
      navigate('/');

    } catch (error) {
      const loginError = error as ApiError;

      setFieldError(loginError.data.errors[0].field, loginError.data.message)
    } finally {
      setSubmitting(false);
    }
  };

  return {
    validationSchema,
    onSubmit,
    isLoading,
    error
  };
};
