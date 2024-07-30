import axios, {AxiosResponse} from "axios";
import {Book} from "@modules/book/static/types";
import {useDeleteBookMutation, useGetUserBooksQuery} from "@/services/api/controllers/bookApi";
import {useNavigate} from "react-router-dom";
import {mimeTypes} from "@/utils/mimeTypes/mimeTypes.ts";
import {setNotification} from "@modules/notifications/store";
import {useAppDispatch} from "@/store/hooks.ts";
import {UploadBookErrorResponse} from "@/services/api/controllers/bookApi/bookApi.types.ts";

const useBookDetailsView = (book: Book | undefined) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [deleteBook] = useDeleteBookMutation();
  const { refetch } = useGetUserBooksQuery();


  const getMimeType = (url: string): string => {
    const extension = url.slice(url.lastIndexOf('.'));
    return mimeTypes[extension] || 'application/octet-stream';
  };

  const removeBook = async () => {
    try {
      if (book) {
        await deleteBook(book?._id).unwrap();
        await refetch();

        navigate('/');

        dispatch(setNotification({
          type: 'success',
          message: `Книга успешно удалена.`
        }))
      }
    } catch (e) {
      const error = e as AxiosResponse<UploadBookErrorResponse>;

      dispatch(setNotification({
        type: 'success',
        message: error.data.message
      }))
    }
  }



  const downloadBook = async () => {
    try {
      const response = await axios({
        url: book?.book,
        method: 'GET',
        responseType: 'blob',
      });

      const mimeType = getMimeType((book?.book as string));

      const url = window.URL.createObjectURL(new Blob([response.data], {type: mimeType}));
      const link = document.createElement('a');
      link.href = url;
      const fileName = book?.title || 'downloadedBook';
      const fileExtension = mimeType.split('/')[1].split('+')[0];
      link.setAttribute('download', `${fileName}.${fileExtension}`);
      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(url);
      link.remove();
    } catch (error) {
      console.error('Ошибка скачивания файла:', error);
    }
  };

  return {
    downloadBook,
    removeBook
  }
}

export default useBookDetailsView;