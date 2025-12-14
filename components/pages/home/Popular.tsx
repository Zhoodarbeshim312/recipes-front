import Image from "next/image";
import img from "@/assets/images/popularImg.svg";
import { IoBookmarks } from "react-icons/io5";
import { IoIosStar, IoMdHeart } from "react-icons/io";
import userNotImg from "@/assets/images/userNotImg.svg";

const Popular = () => {
  return (
    <section className="py-[40px]">
      <div className="container">
        <h1 className="text-[58px] mb-[40px] max-lg:text-[48px] max-md:text-[40px] max-sm:text-[32px]">
          Популярные
        </h1>
        <div
          className="
            grid gap-[20px]
            xl:grid-cols-4
            lg:grid-cols-3
            md:grid-cols-2
            sm:grid-cols-1
          "
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              style={{ border: "2px solid #F4F4F4" }}
              className="
                relative rounded-[12px] flex flex-col gap-[10px]
                overflow-hidden
              "
            >
              <button
                className="
                  absolute top-5 right-5 bg-white p-[10px] text-[25px]
                  rounded-[10px] text-[#B9665B]
                  max-sm:p-[6px] max-sm:text-[20px]
                "
              >
                <IoBookmarks />
              </button>
              <Image
                src={img}
                alt="img"
                className="
                  w-full h-auto
                "
              />
              <div className="m-[10px] flex gap-[2px]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <IoIosStar
                    key={idx}
                    className="text-[25px] max-sm:text-[20px]"
                  />
                ))}
              </div>
              <p className="text-[18px] mx-[10px] max-sm:text-[16px]">
                кейтлин бейсель
              </p>
              <div className="m-[10px] flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <Image
                    src={userNotImg}
                    alt="img"
                    className="w-[40px] h-[40px] max-sm:w-[32px] max-sm:h-[32px]"
                  />
                  <span className="max-sm:text-[14px]">
                    Эмирлан Амангелдиев
                  </span>
                </div>
                <button className="text-[25px] text-[#B9665B] max-sm:text-[20px]">
                  <IoMdHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
