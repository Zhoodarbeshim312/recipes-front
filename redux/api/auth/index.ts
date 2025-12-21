import { api } from "..";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<AUTH.RegisterResponse, AUTH.RegisterRequest>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body: body,
      }),
    }),

    login: build.mutation<AUTH.LoginResponse, AUTH.LoginRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {useRegisterMutation, useLoginMutation} = authApi;
