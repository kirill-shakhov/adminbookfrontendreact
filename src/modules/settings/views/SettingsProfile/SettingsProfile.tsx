import {UiInput} from "@/shared/components/UiInput";
import {UiButton} from "@/shared/components/UiButton";
import {Form, Formik} from "formik";
import {UiUploadFile} from "@/shared/components/UiUploadFile";
import {UserCircleIcon} from "@heroicons/react/16/solid";
import useSettingsProfile from "@modules/settings/views/SettingsProfile/useSettingsProfile.tsx";
import {useDispatch} from "react-redux";
import {UiProgressCircular} from "@/shared/components/UiProgressCircular";

const SettingsProfile = () => {
  const dispatch = useDispatch();
  const {validationSchema, user, isLoading, onSubmit} = useSettingsProfile();

  if (!user) {
    return <UiProgressCircular/>;
  }

  return (
    <Formik
      className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4"
      initialValues={{
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
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
        <Form
          className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4"
          onSubmit={handleSubmit}>

          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be
                careful
                what
                you share.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true"/>
                    <UiUploadFile
                      name={'image'}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive
                mail.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                <div className="sm:col-span-3">
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
                </div>

                <div className="sm:col-span-3">
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
                </div>

                <div className="sm:col-span-3">
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
                </div>

                <div className="mt-6 flex justify-end gap-x-6">
                  <UiButton
                    disabled={isSubmitting || isLoading}
                    loading={isLoading}
                    type="submit"
                    block>
                    Update
                  </UiButton>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>

  )
}

export default SettingsProfile;