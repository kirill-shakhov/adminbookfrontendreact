import './App.scss'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {UiInput} from "./shared/components/UiInput";
import {UiButton} from "./shared/components/UiButton";


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const App: React.FC = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
        <Form onSubmit={handleSubmit}>
          <UiInput
            label={'email'}
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            errors={errors.email}
            touched={touched.email}
          />

          <UiInput
            label={'password'}
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            errors={errors.password}
            touched={touched.password}
          />

          <UiButton
          type={'submit'}
          disabled={isSubmitting}
          >
            Submit
          </UiButton>
        </Form>
      )}
    </Formik>
  </div>
);

export default App;
