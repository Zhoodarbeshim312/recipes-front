"use client";
import Lottie from "lottie-react";
import back from "@/assets/images/authBack.svg";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegisterMutation } from "@/redux/api/auth";
import animationLoader from "@/assets/images/Loading 50 _ Among Us.json";
const Register = () => {
  const [register, { data, error, isLoading }] = useRegisterMutation();
  const nav = useRouter();
  const obj = {
    name: "predator",
    email: "predator@gmail.com",
    password: "predator123",
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
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />

          <input
            style={{ border: "2px solid #FF9A31" }}
            type="email"
            placeholder="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <input
            style={{ border: "2px solid #FF9A31" }}
            type="password"
            placeholder="Пароль"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <input
            style={{ border: "2px solid #FF9A31" }}
            type="password"
            placeholder="Подтвердите пароль"
            // value={confirmPassword}
            // onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <button
            onClick={() => register(obj)}
            disabled={isLoading}
            className="bg-[#FF9A31] text-white rounded-[10px] text-[20px] px-[10px] py-[10px] w-[300px] h-[50px] flex items-center justify-center transition-opacity duration-150"
          >
            {isLoading ? (
              <Lottie
                animationData={animationLoader}
                loop
                className="w-[150%] h-[350%]"
              />
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
