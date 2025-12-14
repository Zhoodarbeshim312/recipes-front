"use client";
import back from "@/assets/images/authBack.svg";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdLogout } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nav = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Заполните все поля!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data));
      nav.push("/");
      toast.success("Успешный вход!", {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Ошибка при входе", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
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
            className="text-[30px] absolute top-[20%] right-[10%] text-[white]"
          >
            <MdLogout />
          </button>
          <input
            id="email"
            style={{ border: "2px solid #FF9A31" }}
            className="bg-[white] text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px]"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            style={{ border: "2px solid #FF9A31" }}
            className="bg-[white] text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px]"
            type="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-[#FF9A31] text-[white] rounded-[10px] text-[20px] px-[20px] py-[10px]"
          >
            Войти
          </button>
          <p className="flex items-center gap-[5px] text-[18px] flex-col">
            Вы впервые в нашем сайте?
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
