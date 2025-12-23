"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

type User = {
  token?: string;
  avatar?: string;
};

const Header = () => {
  const nav = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setTimeout(() => {
        setUser(JSON.parse(storedUser));
      }, 0);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    nav.push("/");
  };

  const scroll1 = () => {
    window.scrollTo({
      top: 1200,
      behavior: "smooth",
    });
  };
  const scroll2 = () => {
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  };
  const scroll3 = () => {
    window.scrollTo({
      top: 2550,
      behavior: "smooth",
    });
  };

  return (
    <header className="py-5 relative bg-white z-50 sticky top-0">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Image
          src={logo}
          alt="logo"
          className="cursor-pointer"
          onClick={() => nav.push("/")}
        />
        <nav className="hidden lg:flex gap-5">
          <p
            onClick={scroll1}
            className="cursor-pointer text-[#380202] font-semibold"
          >
            Категории
          </p>
          <p
            onClick={scroll2}
            className="cursor-pointer text-[#380202] font-semibold"
          >
            Популярные
          </p>
          <p
            onClick={scroll3}
            className="cursor-pointer text-[#380202] font-semibold"
          >
            Добавить рецепт
          </p>
        </nav>
        <div className="flex items-center gap-3 lg:gap-5">
          {user?.token ? (
            <>
              <Image
                unoptimized
                width={50}
                height={50}
                src={user.avatar || "/default-avatar.png"}
                alt="avatar"
                className="rounded-full border-2 border-[#380202]"
              />
              <button onClick={logout} className="text-2xl text-[#380202]">
                <MdLogout />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => nav.push("/login")}
                className="hidden lg:flex text-white font-semibold bg-[#714424] py-1 px-4 rounded-lg"
              >
                Вход
              </button>
              <button
                onClick={() => nav.push("/register")}
                className="hidden lg:flex text-white font-semibold bg-[#714424] py-1 px-4 rounded-lg"
              >
                Регистрация
              </button>
            </>
          )}

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 z-40">
          <Link href="/categories" onClick={() => setOpen(false)}>
            Категории
          </Link>
          <Link href="/popular" onClick={() => setOpen(false)}>
            Популярные
          </Link>
          <Link href="/add" onClick={() => setOpen(false)}>
            Добавить рецепт
          </Link>

          {!user?.token && (
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
