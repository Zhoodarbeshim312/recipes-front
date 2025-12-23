"use client";
import { useState } from "react";
import Lottie from "lottie-react";
import back from "@/assets/images/authBack.svg";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginMutation } from "@/redux/api/auth";
import animationLoader from "@/assets/images/Loading 50 _ Among Us.json";

const Login = () => {
  const nav = useRouter();
  const [loginUser, { isLoading }] = useLoginMutation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const setField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async () => {
    try {
      await loginUser(form).unwrap();
      toast.success("Успешный вход");
      nav.push("/");
    } catch {
      toast.error("Ошибка входа");
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${back.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[100vh] flex items-center justify-center"
    >
      <div className="container">
        <div className="flex flex-col items-center gap-[20px]">
          <button
            onClick={() => nav.push("/")}
            className="text-[30px] absolute top-[5%] right-[10%] text-white"
          >
            <MdLogout />
          </button>
          <input
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            type="email"
            placeholder="Email"
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <input
            value={form.password}
            onChange={(e) => setField("password", e.target.value)}
            type="password"
            placeholder="Пароль"
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <button
            onClick={handleLogin}
            className="bg-[#FF9A31] text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] flex items-center justify-center"
          >
            {isLoading ? (
              <Lottie
                animationData={animationLoader}
                loop
                className="w-[100px] h-[190px]"
              />
            ) : (
              "Войти"
            )}
          </button>
          <p className="flex items-center gap-[5px] text-[18px]">
            Нет аккаунта?
            <span
              onClick={() => nav.push("/register")}
              className="text-[#FF9A31] cursor-pointer"
            >
              Регистрация
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
