import {createApi} from "@reduxjs/toolkit/query/react";
import {axiosBaseQuery} from "@/services/api/helpers/baseQuery.ts";
import {UpdateProfileResponse} from "@/services/api/controllers/profileApi/profileApi.types.ts";

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    update: builder.mutation<UpdateProfileResponse, FormData>({
      query: (request: FormData) => ({
        url: '/profile/update',
        method: 'PATCH',
        data: request
      })
    })
  })
})


export const {
  useUpdateMutation
} = profileApi