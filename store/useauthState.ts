import { create } from "zustand";

interface IRegister {
  form: {
    name: string;
    email: string;
    password: string;
  };
  setField: (field: keyof IRegister["form"], value: string) => void;
  resetForm: () => void;
}

interface ILogin {
  form: {
    email: string;
    password: string;
  };
  setField: (field: keyof ILogin["form"], value: string) => void;
  resetForm: () => void;
}

const useRegister = create<IRegister>((set) => ({
  form: { name: "", email: "", password: "" },
  setField: (field, value) =>
    set((state) => ({
      form: { ...state.form, [field]: value },
    })),
  resetForm: () =>
    set({
      form: { name: "", email: "", password: "" },
    }),
}));

const useLogin = create<ILogin>((set) => ({
  form: { email: "", password: "" },
  setField: (field, value) =>
    set((state) => ({
      form: { ...state.form, [field]: value },
    })),
  resetForm: () =>
    set({
      form: { email: "", password: "" },
    }),
}));

export { useRegister, useLogin };
