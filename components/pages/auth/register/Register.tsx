"use client";
import back from "@/assets/images/authBack.svg";
import { useRegister } from "@/store/useauthState";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const nav = useRouter();
  const { form, resetForm, setField } = useRegister();
  const handleRgister = () => {
    if (!form.name || !form.email || !form.password) {
      toast.error("Заполните все поля");
      return;
    }
    try {
      toast.success("Регистрация успешна 🎉");
      resetForm();
      nav.push("/");
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
            className="text-[30px] absolute top-[5%] right-[10%] text-white"
          >
            <MdLogout />
          </button>
          <input
            style={{ border: "2px solid #FF9A31" }}
            type="text"
            placeholder="Имя"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <input
            style={{ border: "2px solid #FF9A31" }}
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <input
            style={{ border: "2px solid #FF9A31" }}
            type="password"
            placeholder="Пароль"
            value={form.password}
            onChange={(e) => setField("password", e.target.value)}
            className="bg-white text-[20px] rounded-[10px] px-[20px] w-[300px] h-[50px] border-2 border-[#FF9A31]"
          />
          <button
            onClick={handleRgister}
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
