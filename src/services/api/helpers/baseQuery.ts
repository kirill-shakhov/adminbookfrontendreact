import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useRefreshQuery } from "@/services/api/controllers/authApi"; // Обновите этот импорт под свои нужды

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
  credentials: 'include',
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Попытка обновления токена
    try {
      const refreshResult = await authApi.refresh();
      if (refreshResult.data) {
        localStorage.setItem('token', refreshResult.data.accessToken);

        // Повторный запрос с новым токеном
        result = await baseQuery(args, api, extraOptions);
      }
    } catch (err) {
      console.error('Ошибка обновления токена: ', err);
      localStorage.removeItem('token');
    }
  }

  return result;
};

export { baseQueryWithReauth,baseQuery };
