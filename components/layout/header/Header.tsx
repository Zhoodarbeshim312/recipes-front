"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

const Header = () => {
  const nav = useRouter();
  const [user, setUser] = useState<{ token?: string; avatar?: string }>({});
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser({});
    nav.push("/");
  };

  return (
    <header className="py-5 relative bg-white z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Image
          onClick={() => nav.push("/")}
          className="cursor-pointer"
          src={logo}
          alt="logo"
        />

        <nav className="hidden lg:flex gap-5">
          <Link className="text-[#380202] font-semibold" href={"/categories"}>
            Категории
          </Link>
          <Link className="text-[#380202] font-semibold" href={"/popular"}>
            Популярные
          </Link>
          <Link className="text-[#380202] font-semibold" href={"/add"}>
            Добавить рецепт
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:gap-5">
          {user.token ? (
            <>
              <Image
                style={{ border: "2px solid #380202" }}
                className="rounded-full"
                width={50}
                height={50}
                src={user.avatar || "/default-avatar.png"}
                alt="avatar"
              />
              <button onClick={logout} className="text-2xl text-[#380202]">
                <MdLogout />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => nav.push("/login")}
                className="max-[1024px]:hidden min-[1024px]:flex text-white font-semibold bg-[#714424] py-1 px-4 rounded-lg"
              >
                Вход
              </button>
              <button
                onClick={() => nav.push("/register")}
                className="max-[1024px]:hidden min-[1024px]:flex text-white font-semibold bg-[#714424] py-1 px-4 rounded-lg"
              >
                Регистрация
              </button>
            </>
          )}
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 z-40">
          <Link
            className="text-[#380202] font-semibold"
            href={"/categories"}
            onClick={() => setOpen(false)}
          >
            Категории
          </Link>
          <Link
            className="text-[#380202] font-semibold"
            href={"/popular"}
            onClick={() => setOpen(false)}
          >
            Популярные
          </Link>
          <Link
            className="text-[#380202] font-semibold"
            href={"/add"}
            onClick={() => setOpen(false)}
          >
            Добавить рецепт
          </Link>
          {!user.token && (
            <>
              <button
                onClick={() => {
                  setOpen(false);
                  nav.push("/login");
                }}
                className="text-white font-semibold bg-[#714424] py-1 px-4 rounded-lg"
              >
                Вход
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  nav.push("/register");
                }}
                className="text-white font-semibold bg-[#714424] py-1 px-4 rounded-lg"
              >
                Регистрация
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
