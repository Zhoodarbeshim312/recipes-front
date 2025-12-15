"use client";
import back from "@/assets/images/authBack.svg";
import { useLogin } from "@/store/useauthState";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const nav = useRouter();
  const { form, resetForm, setField } = useLogin();

  const handleLogin = () => {
    if (!form.email || !form.password) {
      toast.error("Заполните все поля");
      return;
    }
    try {
      if (form.email === "test@test.com" && form.password === "123456") {
        toast.success("Вход успешен 🎉");
        resetForm();
        nav.push("/");
      } else {
        toast.error("Неверный email или пароль");
      }
    } catch (err) {
      toast.error((err as Error).message);
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
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <input
            style={{ border: "2px solid #FF9A31" }}
            value={form.password}
            onChange={(e) => setField("password", e.target.value)}
            type="password"
            placeholder="Пароль"
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />

          <button
            onClick={handleLogin}
            className="bg-[#FF9A31] text-white rounded-[10px] text-[20px] px-[20px] py-[10px]"
          >
            Войти
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
