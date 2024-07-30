import React from 'react'
import ReactDOM from 'react-dom/client'

import {RouterProvider} from 'react-router-dom';
import router from "./router";

import {store} from "@/store";
import {Provider} from 'react-redux';

import './index.css'
import {NotificationsList} from "@/shared/components/NotificationsList";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationsList/>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
