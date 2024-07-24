import {useNavigate} from 'react-router-dom';
import {useRegistrationMutation} from '@/services/api/controllers/authApi';
import * as Yup from 'yup';
import {ApiError} from '@/services/api/controllers/authApi/authApi.types.ts';
import {FormProps, SubmitProps} from '@moduleAuth/views/RegistrationView/Registration.types.ts';
import {setCredentials} from "@moduleAuth/store";

export const useRegisterView = () => {
  const [registration, {isLoading, error}] = useRegistrationMutation();
  const navigate = useNavigate();


  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const onSubmit = async (values: FormProps, {setSubmitting, dispatch, setFieldError}: SubmitProps) => {

    const collectFormData = () => {
      const formData = new FormData();

      formData.append('username', values.username);
      formData.append('password', values.password);
      formData.append('firstName', values.firstName);
      formData.append('lastName', values.lastName);
      formData.append('email', values.email);

      if (values.image instanceof File) {
        formData.append('image', values.image);
      }

      return formData;
    }

    try {
      const formData = collectFormData();
      const userData
        = await registration(formData).unwrap();

      console.log(userData);

      dispatch(setCredentials({
        accessToken: userData.accessToken,
      }))

      console.log(values);

      localStorage.setItem('token', userData.accessToken);
      navigate('/');

    } catch (error) {
      const registerError = error as ApiError;
      console.log(registerError);
      setFieldError('username', registerError.data.message);
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
