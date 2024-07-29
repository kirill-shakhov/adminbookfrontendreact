import {SubmitProps} from "@moduleAuth/static/types";
import * as Yup from "yup";
import {useAppSelector} from "@/store/hooks.ts";
import {useUpdateMutation} from "@/services/api/controllers/profileApi";
import {setUser} from "@moduleAuth/store";


const useSettingsProfile = () => {
  const user = useAppSelector(state => state.auth.user);
  const [update, {isLoading}] = useUpdateMutation();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });


  const onSubmit = async (values: {
    firstName: string,
    lastName: string,
    email: string,
    image: File | null
  }, {setSubmitting, dispatch, setFieldError}: SubmitProps) => {
    const collectFormData = () => {
      const formData = new FormData();

      formData.append('firstName', values.firstName);
      formData.append('lastName', values.lastName);
      formData.append('email', values.email);

      if (values.image !== null) {
        formData.append('image', values.image);
      }

      return formData;
    }

    try {
      const formData = collectFormData();
      const {userData}
        = await update(formData).unwrap();

      const {firstName, lastName, email, image} = userData;

      if (user) {
        dispatch(setUser({
          user: {
            ...user,
            firstName: `${firstName} + test`,
            lastName: lastName,
            email: email,
            image: image
          }
        }))

      }

    } catch (error) {
      console.log('error');
      setFieldError('firstname', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return {
    validationSchema,
    onSubmit,
    isLoading,
    user
  }
}

export default useSettingsProfile;