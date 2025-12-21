"use client";
import Lottie from "lottie-react";
import back from "@/assets/images/authBack.svg";
import { useRegister } from "@/store/useauthState";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { useRegisterMutation } from "@/redux/api/auth";
import animationLoader from "@/assets/images/Loading 50 _ Among Us.json";
const Register = () => {


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
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />

          <input
            style={{ border: "2px solid #FF9A31" }}
            type="email"
            placeholder="Email"

            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <input
            style={{ border: "2px solid #FF9A31" }}
            type="password"
            placeholder="Пароль"

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
