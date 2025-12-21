import { create } from "zustand";

interface User {
  name: string;
  email: string;
  password: string;
}

interface Store {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (userData: User) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  login: (userData) =>
    set({
      user: userData,
      isLoading: false,
      error: null,
    }),

  logout: () =>
    set({
      user: null,
    }),

  setLoading: (loading) =>
    set({
      isLoading: loading,
    }),

  setError: (error) =>
    set({
      error,
      isLoading: false,
    }),
}));
