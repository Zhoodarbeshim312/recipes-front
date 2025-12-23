"use client";
import Lottie from "lottie-react";
import back from "@/assets/images/authBack.svg";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegisterMutation } from "@/redux/api/auth";
import animationLoader from "@/assets/images/Loading 50 _ Among Us.json";
import { useRegister } from "@/store/useauthState";

const Register = () => {
  const nav = useRouter();

  const { form, setField, resetForm } = useRegister();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const handleRegister = async () => {
    try {
      await registerUser(form).unwrap();
      toast.success("Регистрация прошла успешно");
      resetForm();
      nav.push("/login");
    } catch {
      toast.error("Ошибка регистрации");
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
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            type="text"
            placeholder="Имя"
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
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
            onClick={handleRegister}
            disabled={isLoading}
            className="bg-[#FF9A31] text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] flex items-center justify-center disabled:opacity-60"
          >
            {isLoading ? (
              <Lottie animationData={animationLoader} loop />
            ) : (
              "Зарегистрироваться"
            )}
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
