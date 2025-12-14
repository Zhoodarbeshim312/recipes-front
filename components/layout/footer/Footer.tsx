import Image from "next/image";
import logo from "@/assets/images/logotype.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#714424] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <Image src={logo} alt="logo" className="w-[120px] md:w-auto" />
            <p className="text-[16px] leading-relaxed">
              В любой непонятной ситуации <br /> стоит хорошенько поесть.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <Link
              className="text-white text-lg font-semibold hover:text-[#FF9A31] transition-colors"
              href={"/categories"}
            >
              Категории
            </Link>
            <Link
              className="text-white text-lg font-semibold hover:text-[#FF9A31] transition-colors"
              href={"/popular"}
            >
              Популярные
            </Link>
            <Link
              className="text-white text-lg font-semibold hover:text-[#FF9A31] transition-colors"
              href={"/add"}
            >
              Добавить рецепт
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
            <h2 className="text-[#FF9A31] text-2xl md:text-3xl font-semibold text-center md:text-left">
              Новостная рассылка
            </h2>
            <p className="text-[#FFFFFFA6] text-sm md:text-[16px] text-center md:text-left leading-relaxed">
              Подпишитесь на нашу рассылку, чтобы <br /> получать больше
              бесплатных советов
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full md:w-[377px]">
              <input
                style={{ border: "2px solid var(--clr-grey-dark)" }}
                type="email"
                placeholder="Напиши свой Email"
                className="bg-[white] rounded-lg px-4 py-2 w-full sm:flex-1 text-black border-2 border-gray-300 focus:outline-none focus:border-[#FF9A31]"
              />
              <button className="bg-[#FF9A31] text-white rounded-lg px-6 py-2 w-full sm:w-auto hover:bg-[#e6891f] transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-white mt-10"></div>
        <p className="text-center mt-4 text-sm md:text-[16px]">
          © 2024 Любимые Рецепты. Все права защищены
        </p>
      </div>
    </footer>
  );
};

export default Footer;
