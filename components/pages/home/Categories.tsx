import Image from "next/image";
import img from "@/assets/images/categoriImg.svg";

const Categories = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] mb-10 text-center">
            Категории
          </h1>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-10">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-[26px] w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px]"
              >
                <Image src={img} alt="img" className="w-full h-auto" />
                <p className="text-center">Рецепты завтраков</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
