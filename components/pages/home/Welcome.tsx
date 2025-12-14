"use client";
import Image from "next/image";
import imgBack from "@/assets/images/welcomeBack.svg";
import img from "@/assets/images/welcomeImg.svg";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const nav = useRouter();
  return (
    <section className="Welcome py-[40px]">
      <div className="container">
        <Image
          width={868}
          height={840}
          className="
            absolute right-0 top-0 z-[-1]
          "
          src={imgBack}
          alt="img"
        />

        <div
          className="
            content flex items-center justify-between
            max-lg:flex-col max-lg:text-center max-lg:gap-[40px]
          "
        >
          <div
            className="
              text flex flex-col gap-[40px]
              max-lg:items-center
            "
          >
            <h1
              className="
                text-[64px] leading-[70px] text-[#380202] font-bold
                lg:text-[64px] lg:leading-[70px]
                md:text-[48px] md:leading-[55px]
                sm:text-[36px] sm:leading-[40px]
                max-sm:text-[28px] max-sm:leading-[32px]
              "
            >
              Твое Ежедневное <br /> Блюдо- <br />
              <span className="text-[#FF9A31]">Гастрономическое</span> <br />
              Путешествие
            </h1>

            <p
              className="
                text-[24px]
                md:text-[20px]
                sm:text-[18px]
                max-sm:text-[16px]
              "
            >
              Самая вкусная еда обычно имеет маленький секрет… <br /> в нее
              всегда добавляют щепотку любви.
            </p>

            <div
              className="
                flex flex-col items-start
                max-lg:items-center
              "
            >
              <button
                onClick={() => nav.push("/register")}
                className="
                  bg-[#714424] text-white px-[26px] py-[5px] rounded-[10px] text-[25px]
                  md:text-[22px]
                  sm:text-[20px]
                  max-sm:text-[18px]
                "
              >
                Регистрация
              </button>

              <p
                className="
                  flex gap-1 text-[20px]
                  md:text-[18px]
                  sm:text-[16px]
                  max-sm:text-[14px]
                  mt-2
                  max-lg:justify-center
                "
              >
                у тебя есть аккаунт?
                <a
                  className="text-[#FF9A31] cursor-pointer"
                  onClick={() => nav.push("/login")}
                >
                  Войти
                </a>
              </p>
            </div>
          </div>

          <div
            className="
              img 
              max-lg:flex max-lg:justify-center
            "
          >
            <Image
              src={img}
              alt="img"
              className="
                w-full max-w-[500px] 
                md:max-w-[400px] 
                sm:max-w-[300px]
                max-sm:max-w-[250px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
