import axios from "axios";
import {Book} from "@modules/book/static/types";
import {useDeleteBookMutation} from "@/services/api/controllers/bookApi";
import {useNavigate} from "react-router-dom";

const useBookDetailsView = (book: Book | undefined) => {
  const navigate = useNavigate();
  const [deleteBook] = useDeleteBookMutation();

  interface MimeTypes {
    [key: string]: string;
  }

  const mimeTypes: MimeTypes = {
    '.epub': 'application/epub+zip',
    '.mobi': 'application/x-mobipocket-ebook',
    '.azw': 'application/vnd.amazon.ebook',
    '.pdf': 'application/pdf',
    '.fb2': 'application/x-fictionbook+xml',
    '.txt': 'text/plain',
    '.html': 'text/html',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  };

  const getMimeType = (url: string): string => {
    const extension = url.slice(url.lastIndexOf('.'));
    return mimeTypes[extension] || 'application/octet-stream';
  };

  const removeBook = async () => {
    try {
      if (book) {
        await deleteBook(book?._id).unwrap();
        console.log(`Книга с id ${book._id} успешно удалена.`);
        navigate('/');
      }
    } catch (e) {
      console.error(e);
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