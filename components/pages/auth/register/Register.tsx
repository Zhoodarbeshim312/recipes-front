"use client";
import back from "@/assets/images/authBack.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdLogout } from "react-icons/md";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const nav = useRouter();

  const handleRegister = async () => {
    if (!name || !lastName || !email || !password || !confirmPassword) {
      toast.error("Заполните все поля!", { position: "top-center" });
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Пароли не совпадают!", { position: "top-center" });
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        lastName,
        email,
        password,
      });
      console.log("Ответ сервера:", res.data);
      toast.success("Регистрация прошла успешно!", { position: "top-center" });
      nav.push("/login");
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Ошибка регистрации", {
        position: "top-center",
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
            className="text-[30px] absolute top-[5%] right-[10%] text-white"
          >
            <MdLogout />
          </button>
          <input
            style={{ border: "2px solid #FF9A31" }}
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <input
            style={{ border: "2px solid #FF9A31" }}
            type="text"
            placeholder="Фамилия"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <input
            style={{ border: "2px solid #FF9A31" }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <input
            style={{ border: "2px solid #FF9A31" }}
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <input
            style={{ border: "2px solid #FF9A31" }}
            type="password"
            placeholder="Подтвердите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <button
            onClick={handleRegister}
            className="bg-[#FF9A31] text-white rounded-[10px] text-[20px] px-[20px] py-[10px] w-[300px]"
          >
            Зарегистрироваться
          </button>

          <p className="flex items-center gap-[5px] text-[18px]">
            У вас есть аккаунт?
            <span
              onClick={() => nav.push("/login")}
              className="text-[#FF9A31] cursor-pointer"
            >
              Войти
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Register;
