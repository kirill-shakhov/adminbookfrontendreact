import * as Yup from "yup";
import {SubmitProps} from "@moduleAuth/static/types";
import {
  useGetAuthorsQuery,
  useGetGenresQuery,
  useGetUserBooksQuery,
  useUploadNewBookMutation
} from "@/services/api/controllers/bookApi";
import {mimeTypes} from "@/utils/mimeTypes/mimeTypes.ts";
import {useState} from "react";
import {setNotification} from "@modules/notifications/store";
import {UploadBookErrorResponse} from "@/services/api/controllers/bookApi/bookApi.types.ts";
import {AxiosResponse} from "axios";
import {useNavigate} from "react-router-dom";

const BooksUploadView = () => {
  const navigate = useNavigate();
  const [upload, {isLoading}] = useUploadNewBookMutation();
  const { refetch} = useGetUserBooksQuery()
  const {data: authorsData, isLoading: isAuthorsLoading} = useGetAuthorsQuery();
  const {data: genresData, isLoading: isGenresLoading} = useGetGenresQuery();

  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');

  const selectGenre = (data: string) => {
    setSelectedGenre(data)
  };

  const selectAuthor = (data: string) => {
    setSelectedAuthor(data);
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Required'),
    genreName: Yup.string()
      .min(3, 'genreName must be at least 3 characters')
      .max(40, 'genreName must be at most 40 characters')
      .required('Required'),
    book: Yup.mixed()
      .required('Required').test('fileFormat', 'Unsupported Format', (value: unknown) => {
        if (!value) return false;

        const file = value as { type: string };
        return Object.values(mimeTypes).includes(file.type);
      }),
    authorName: Yup
      .string()
      .min(3, 'authorName must be at least 3 characters')
      .max(40, 'authorName must be at most 40 characters')
      .required('Required'),
  });

  const onSubmit = async (values: {
    title: string,
    genreName: string,
    authorName: string,
    image: File | null,
    book: File | null,
  }, {setSubmitting, dispatch}: SubmitProps) => {

    const collectFormData = (): FormData => {
      const formData: FormData = new FormData();

      formData.append('title', values.title);
      formData.append('genreName', values.genreName);
      formData.append('authorName', values.authorName);

      if (values.image instanceof File) {
        formData.append('image', values.image);
      }
      if (values.book instanceof File) {
        formData.append('book', values.book);
      }

      return formData;
    }

    try {
      const formData = collectFormData();
      const response = await upload(formData).unwrap();

      await refetch();
      console.log(response);

      navigate('/')

      dispatch(setNotification({
        type: 'success',
        message: response.message
      }))


    } catch (error) {
      const response = error as AxiosResponse<UploadBookErrorResponse>;
      // setFieldError('firstname', 'error');

      dispatch(setNotification({
        type: 'error',
        message: response.data.message
      }))

    } finally {
      setSubmitting(false);
    }
  };

  return {
    validationSchema,
    onSubmit,
    isLoading,

    isAuthorsLoading,
    isGenresLoading,

    authorsData,
    genresData,

    selectedGenre,
    selectedAuthor,

    selectGenre,
    selectAuthor
  }
}

export default BooksUploadView;