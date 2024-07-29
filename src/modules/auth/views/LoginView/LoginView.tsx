import {Form, Formik} from "formik";

import {useAppDispatch} from "@/store/hooks";
import {useLoginView} from "@moduleAuth/views/LoginView/useLoginView.tsx";

import {Link} from "react-router-dom";

import {UiInput} from "@/shared/components/UiInput";
import {UiButton} from "@/shared/components/UiButton";
import {Logo} from "@/shared/components/Logo";

const LoginView = () => {
  const {
    validationSchema,
    onSubmit,
    isLoading,
  } = useLoginView();
  const dispatch = useAppDispatch();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

      <div className="mx-auto w-auto" style={{width: '70px'}}>
        <Logo
          theme="dark"
        />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={{username: '', password: ''}}
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

              <UiButton
                type="submit"
                disabled={isSubmitting || isLoading}
                loading={isLoading}
                block
              >
                Submit
              </UiButton>

            </Form>
          )}
        </Formik>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account? {' '}
          <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign up!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginView;