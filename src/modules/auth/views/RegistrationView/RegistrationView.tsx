import {Link} from 'react-router-dom';

import {Formik, Form} from 'formik';

import {useRegisterView} from './useRegistrationView.tsx';
import {useAppDispatch} from "@/store/hooks.ts";

import {UiUploadFile} from "@/shared/components/UiUploadFile";
import {Logo} from "@/shared/components/Logo";
import {UiButton} from '@/shared/components/UiButton';
import {UiInput} from "@/shared/components/UiInput";

const RegistrationView = () => {
  const {
    onSubmit,
    validationSchema,
    isLoading,

  } = useRegisterView();

  const dispatch = useAppDispatch();


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mx-auto w-auto" style={{width: '70px'}}>
        <Logo
          theme="dark"
        />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your
          account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={{
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            image: null
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, {setSubmitting, setFieldError}) => {
            await onSubmit(values, {setSubmitting, dispatch, setFieldError});
          }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
            <Form className="space-y-6" onSubmit={handleSubmit}>
              <UiInput
                label="Username"
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                errors={errors.username}
                touched={touched.username}
              />
              <UiInput
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                errors={errors.password}
                touched={touched.password}
              />

              <UiInput
                label="First Name"
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                errors={errors.firstName}
                touched={touched.firstName}
              />

              <UiInput
                label="Last Name"
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                errors={errors.lastName}
                touched={touched.lastName}
              />

              <UiInput
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                errors={errors.email}
                touched={touched.email}
              />


              <UiUploadFile name={'image'}/>


              <UiButton
                disabled={isSubmitting || isLoading}
                loading={isLoading}
                type="submit"
                block>
                Register
              </UiButton>
            </Form>
          )}
        </Formik>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Log in!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationView;
