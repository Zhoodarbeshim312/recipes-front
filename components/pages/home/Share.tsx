"use client";
import Image from "next/image";
import img from "@/assets/images/shareImg.svg";
import { useRouter } from "next/navigation";

const Share = () => {
  const nav = useRouter();
  return (
    <section className="py-[40px]">
      <div className="container">
        <div
          className="
            flex justify-between items-center
            max-lg:flex-col-reverse max-lg:text-center max-lg:gap-[30px]
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

          <div
            className="
              flex flex-col items-end text-right gap-[20px]
              max-lg:items-center max-lg:text-center
            "
          >
            <h1
              className="
                text-[64px] leading-[79px]
                md:text-[48px] md:leading-[60px]
                sm:text-[36px] sm:leading-[42px]
                max-sm:text-[28px] max-sm:leading-[34px]
              "
            >
              Поделись Своим <br />
              <span className="text-[#FFA64A]">Рецептом</span>
            </h1>

            <p
              className="
                text-[24px]
                md:text-[20px]
                sm:text-[18px]
                max-sm:text-[16px]
              "
            >
              Поделись с своими самыми крутыми рецептами и <br /> получи отзыв
            </p>

            <button
              onClick={() => nav.push("/add")}
              className="
                text-[25px] bg-[#714424] rounded-[10px] py-[5px] px-[26px] text-white
                md:text-[22px]
                sm:text-[20px]
                max-sm:text-[18px]
              "
            >
              Создать новый рецепт
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Share;
