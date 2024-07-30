import {Form, Formik} from "formik";

import {useAppDispatch} from "@/store/hooks.ts";
import useBooksUploadView from "@modules/book/views/BooksUploadView/useBooksUploadView.tsx";

import {RecentItemsSelector} from "@modules/book/components/RecentItemsSelector";
import {UiUploadFile} from "@/shared/components/UiUploadFile";
import {UiProgressCircular} from "@/shared/components/UiProgressCircular";
import {UiInput} from "@/shared/components/UiInput";
import {UiButton} from "@/shared/components/UiButton";

const BooksUploadView = () => {
  const dispatch = useAppDispatch();

  const {
    validationSchema
    , onSubmit
    , isLoading,
    authorsData,
    genresData,

    selectedGenre,
    selectedAuthor,
    selectGenre,
    selectAuthor
  } = useBooksUploadView();


  return (
    <Formik
      initialValues={{
        title: '',
        genreName: selectedGenre || '',
        authorName: selectedAuthor || '',
        image: null,
        book: null
      }}
      enableReinitialize={true}
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
          className="w-full py-1 md:w-2/3 lg:w-3/4"
          onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Upload new book</h2>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="flex flex-col gap-4">
                <div className="sm:col-span-3">
                  <UiInput
                    label="Title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    errors={errors.title}
                    touched={touched.title}
                  />
                </div>

                <div className="sm:col-span-3">
                  <UiInput
                    label="Genre"
                    name="genreName"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.genreName}
                    errors={errors.genreName}
                    touched={touched.genreName}
                  />

                  <div className="mt-2">

                    {genresData ? <RecentItemsSelector
                      chooseItem={selectGenre}
                      items={genresData.genres}
                    /> : <UiProgressCircular/>}

                  </div>
                </div>

                <div className="sm:col-span-4">
                  <UiInput
                    label="Author"
                    name="authorName"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.authorName}
                    errors={errors.authorName}
                    touched={touched.authorName}
                  />

                  <div className="mt-2">
                    {authorsData ? <RecentItemsSelector
                      chooseItem={selectAuthor}
                      items={authorsData.authors}
                    /> : <UiProgressCircular/>}
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-10 flex items-center  gap-14">
              <div className="col-span-full">
                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                <div className="mt-2 flex items-center gap-x-3">

                  <UiUploadFile
                    name={'image'}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Book</label>
                <div className="mt-2 flex items-center gap-x-3">

                  <UiUploadFile
                    name={'book'}
                  />

                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-x-6">
            <UiButton
              type="submit"
              loading={isLoading}
              disabled={isSubmitting || isLoading}
            >
              save
            </UiButton>
          </div>

          {/*  <ui-notification*/}
          {/*        :status="notificationData.status"*/}
          {/*:message="notificationData.message"*/}
          {/*    />*/}

        </Form>
      )}
    </Formik>
  )
}

export default BooksUploadView;