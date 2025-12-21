"use client";
import Lottie from "lottie-react";
import animationLoader from "@/assets/images/loading-animation.json";
import back from "@/assets/images/authBack.svg";
import { useLoginMutation } from "@/redux/api/auth";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const nav = useRouter();
  const [login, { data, error, isLoading }] = useLoginMutation();

  // const handleRegister = async () => {
  //   try {
  //     const res = await register({
  //       email,
  //       password,
  //     }).unwrap();
  //     console.log("Registration successful:", res);
  //   } catch (err) {
  //     console.error("Registration failed:", err);
  //   }
  const obj = {
    name: "ilhom",
    email: "ilhom@gmail.com",
    password: "ilhom123",
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
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            style={{ border: "2px solid #FF9A31" }}
            className="bg-[white] text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px]"
            type="password"
            placeholder="Пароль"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => login(obj)}
            disabled={isLoading}
            className="bg-[#FF9A31] text-white rounded-[10px]
             w-[300px] h-[52px]
             flex items-center justify-center"
          >
            {isLoading ? (
              <Lottie
                animationData={animationLoader}
                loop
                autoplay
                style={{ width: 36, height: 36 }}
              />
            ) : (
              "Войти"
            )}
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
