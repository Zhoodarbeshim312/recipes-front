"use client";
import Lottie from "lottie-react";
import animationLoader from "@/assets/images/loading-animation.json";
import back from "@/assets/images/authBack.svg";

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
            className="text-[30px] absolute top-[20%] right-[10%] text-white"
          >
            <MdLogout />
          </button>

          <input
            style={{ border: "2px solid #FF9A31" }}
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            type="text"
            placeholder="Email"

          <input
            style={{ border: "2px solid #FF9A31" }}
            value={form.password}
            onChange={(e) => setField("password", e.target.value)}
            type="password"
            placeholder="Пароль"

          />

          <button

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

          <p className="flex flex-col items-center gap-[5px] text-[18px]">
            Вы впервые на сайте?
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
