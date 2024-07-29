import {Navigate, RouteObject} from "react-router-dom";
import BooksLayoutView from "@modules/book/views/BooksLayoutView/BooksLayoutView";
import BooksLibraryView from "@modules/book/views/BooksLibraryView/BooksLibraryView";
import BookDetailsView from "@modules/book/views/BookDetailsView/BookDetailsView.tsx";
import BooksUploadView from "@modules/book/views/BooksUploadView/BooksUploadView.tsx";

import PrivateRoute from "@/router/guards/PrivateRoute.tsx";


export default [
  {
    path: 'books',
    element: (<PrivateRoute
      permissions={['USER', 'ADMIN']}>
      <BooksLayoutView/>
    </PrivateRoute>),
    children: [
      {
        path: '',
        element: <Navigate to='library' replace/>,
      },
      {
        path: 'library',
        element: <BooksLibraryView/>
      },
      {
        path: 'upload-book',
        element: <BooksLibraryView/>
      },
      {
        path: 'upload-book',
        element: <BooksUploadView/>
      },
      {
        path: ':bookId',
        element: <BookDetailsView/>
      }
    ]
  }
] as RouteObject[];

