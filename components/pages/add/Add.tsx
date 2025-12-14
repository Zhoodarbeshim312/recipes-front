"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import addImg from "@/assets/images/addImg.svg";
import axios from "axios";

interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  portion: string;
  cookHour: string;
  cookMin: string;
  prepHour: string;
  prepMin: string;
  category: string;
}

const Add = () => {
  const [data, setData] = useState<Recipe[]>([]);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>(["", "", ""]);
  const [instructions, setInstructions] = useState<string[]>(["", "", ""]);
  const [portion, setPortion] = useState<string>("");
  const [cookHour, setCookHour] = useState<string>("");
  const [cookMin, setCookMin] = useState<string>("");
  const [prepHour, setPrepHour] = useState<string>("");
  const [prepMin, setPrepMin] = useState<string>("");
  const [category, setCategory] = useState<string>("Рецепты завтраков");
  const handleClick = () => {
    fileRef.current?.click();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  const addRecipes = async () => {
    try {
      const add = {
        title,
        description,
        ingredients,
        instructions,
        portion,
        cookHour,
        cookMin,
        prepHour,
        prepMin,
        category,
      };

      const res = await axios.post(
        "http://localhost:5000/api/recipe/addRecipe",
        add,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setData((prev) => [...prev, res.data]);
      alert("Рецепт успешно добавлен!");
    } catch (error: any) {
      console.error(error);
      alert("Ошибка при добавлении рецепта");
    }
  };

  return (
    <section className="py-[40px]">
      <div className="container px-4">
        <div>
          <h1 className="text-[28px] sm:text-[32px] mb-[20px] text-center sm:text-left">
            Создать рецепт
          </h1>
          <div className="h-[2px] w-full bg-[#C0C0C0] mb-[30px]"></div>
          <div className="flex flex-col w-full max-w-[600px] mx-auto items-center">
            <div className="w-full flex flex-col gap-[10px]">
              <h1 className="text-[20px] sm:text-[25px] text-[#FF9A31]">
                Название рецепта:
              </h1>
              <input
                className="rounded-[10px] h-[54.5px] px-[10px] text-[18px] sm:text-[22px] w-full"
                style={{ border: "2px solid #C0C0C0" }}
                type="text"
                placeholder="Добавить название"
              />
            </div>
            <div className="w-full h-[250px] sm:h-[302px] bg-[#D9D9D9] rounded-[10px] overflow-hidden mt-[20px] border-4 border-[#ff9900] flex items-center justify-center">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                "Img"
              )}
            </div>
            <div className="w-full flex flex-col items-center mt-[20px]">
              <input
                type="file"
                ref={fileRef}
                onChange={handleChange}
                accept="image/*"
                className="hidden"
              />

              <div
                onClick={handleClick}
                className="w-[160px] sm:w-[200px] h-[120px] sm:h-[150px] cursor-pointer bg-[#D9D9D9] border-4 border-[#ff9900] rounded-2xl flex flex-col items-center justify-center gap-3 transition"
              >
                <Image src={addImg} alt="add" width={60} height={60} />
                <p className="text-black text-lg">добавить фото</p>
              </div>
            </div>

            <div className="w-full flex flex-col mt-[20px]">
              <h1 className="text-[20px] sm:text-[25px] text-[#FF9A31] my-[20px]">
                Информация о питательности продукта
              </h1>

              <div className="w-full flex flex-col md:flex-row justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="w-[265px] flex items-center justify-between p-[5px] h-[45px] rounded-[10px] bg-[#D9D9D9]">
                    <p className="pl-[10px] text-[#696969]">Калории</p>
                    <input
                      className="bg-white rounded-[10px] text-center w-[89px] p-[5px]"
                      type="number"
                    />
                  </div>
                  <div className="w-[265px] flex items-center justify-between p-[5px] h-[45px] rounded-[10px] bg-[#D9D9D9]">
                    <p className="pl-[10px] text-[#696969]">Углеводы</p>
                    <input
                      className="bg-white rounded-[10px] text-center w-[89px] p-[5px]"
                      type="number"
                    />
                  </div>
                  <div className="w-[265px] flex items-center justify-between p-[5px] h-[45px] rounded-[10px] bg-[#D9D9D9]">
                    <p className="pl-[10px] text-[#696969]">Белок</p>
                    <input
                      className="bg-white rounded-[10px] text-center w-[89px] p-[5px]"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-[265px] flex items-center justify-between p-[5px] h-[45px] rounded-[10px] bg-[#D9D9D9]">
                    <p className="pl-[10px] text-[#696969]">Натрий</p>
                    <input
                      className="bg-white rounded-[10px] text-center w-[89px] p-[5px]"
                      type="number"
                    />
                  </div>
                  <div className="w-[265px] flex items-center justify-between p-[5px] h-[45px] rounded-[10px] bg-[#D9D9D9]">
                    <p className="pl-[10px] text-[#696969]">Чистые углеводы</p>
                    <input
                      className="bg-white rounded-[10px] text-center w-[89px] p-[5px]"
                      type="number"
                    />
                  </div>
                  <div className="w-[265px] flex items-center justify-between p-[5px] h-[45px] rounded-[10px] bg-[#D9D9D9]">
                    <p className="pl-[10px] text-[#696969]">Жир</p>
                    <input
                      className="bg-white rounded-[10px] text-center w-[89px] p-[5px]"
                      type="number"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <h1 className="text-[20px] sm:text-[25px] text-[#FF9A31] mt-[40px] mb-[20px]">
                Описание:
              </h1>
              <input
                style={{ border: "2px solid #C0C0C0" }}
                className="rounded-[10px] h-[54.5px] px-[10px] text-[18px] sm:text-[22px] w-full"
                type="text"
                placeholder="Представь свой рецепт"
              />
            </div>

            <div className="w-full flex flex-col gap-[20px]">
              <h1 className="text-[20px] sm:text-[25px] text-[#FF9A31] mt-[40px]">
                Ингредиенты:
              </h1>
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <input
                    key={i}
                    style={{ border: "2px solid #C0C0C0" }}
                    className="rounded-[10px] h-[54.5px] px-[10px] text-[18px] sm:text-[22px] w-full"
                    type="text"
                    placeholder="Добавить ингредиент"
                  />
                ))}
              <p className="text-[20px] sm:text-[24px] cursor-pointer w-max">
                + Добавить шапку
              </p>
            </div>

            <div className="w-full flex flex-col gap-[20px]">
              <h1 className="text-[20px] sm:text-[25px] text-[#FF9A31] mt-[40px]">
                Инстукция:
              </h1>

              <input
                style={{ border: "2px solid #C0C0C0" }}
                className="rounded-[10px] h-[54.5px] px-[10px] text-[18px] sm:text-[22px] w-full"
                type="text"
                placeholder="Добавить ингредиент"
              />

              <textarea
                style={{ border: "2px solid #C0C0C0" }}
                className="rounded-[10px] h-[150px] px-[10px] text-[18px] sm:text-[22px] w-full"
                placeholder="Добавить ингредиент"
              />

              <input
                style={{ border: "2px solid #C0C0C0" }}
                className="rounded-[10px] h-[54.5px] px-[10px] text-[18px] sm:text-[22px] w-full"
                type="text"
                placeholder="Добавить ингредиент"
              />

              <p className="text-[20px] sm:text-[24px] cursor-pointer w-max">
                + Добавить шапку
              </p>
            </div>

            <div className="w-full flex flex-col gap-[20px]">
              <h1 className="text-[20px] sm:text-[25px] text-[#FF9A31] mt-[40px]">
                Порция:
              </h1>
              <input
                style={{ border: "2px solid #C0C0C0" }}
                className="rounded-[10px] h-[54.5px] px-[10px] text-[18px] sm:text-[22px] w-full"
                type="text"
                placeholder="#"
              />
            </div>

            <div className="w-full flex flex-col gap-[20px]">
              <h1 className="text-[20px] sm:text-[25px] text-[#FF9A31] mt-[40px]">
                Время приготовления:
              </h1>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <input
                  style={{ border: "2px solid #C0C0C0" }}
                  className="rounded-[10px] h-[54.5px] px-[10px] text-[18px] sm:text-[22px] w-full sm:w-[48%]"
                  type="text"
                  placeholder="Час..."
                />
                <input
                  style={{ border: "2px solid #C0C0C0" }}
                  className="rounded-[10px] h-[54.5px] px-[10px] text-[18px] sm:text-[22px] w-full sm:w-[48%]"
                  type="text"
                  placeholder="Минут..."
                />
              </div>

              <p>Сколько времени нужно, чтобы приготовить этот рецепт</p>
            </div>

            <div className="w-full flex flex-col gap-[20px]">
              <h1 className="text-[20px] sm:text-[25px] text-[#FF9A31] mt-[40px]">
                Время подготовки:
              </h1>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <input
                  style={{ border: "2px solid #C0C0C0" }}
                  className="rounded-[10px] h-[54.5px] px-[10px] text-[18px] sm:text-[22px] w-full sm:w-[48%]"
                  type="text"
                  placeholder="Час..."
                />
                <input
                  style={{ border: "2px solid #C0C0C0" }}
                  className="rounded-[10px] h-[54.5px] px-[10px] text-[18px] sm:text-[22px] w-full sm:w-[48%]"
                  type="text"
                  placeholder="Минут..."
                />
              </div>

              <p>Сколько времени нужно, чтобы приготовить этот рецепт</p>
            </div>

            <div className="w-full flex flex-col gap-[20px] mb-[50px]">
              <h1 className="text-[20px] sm:text-[25px] text-[#FF9A31] mt-[40px]">
                Категории:
              </h1>

              <select
                style={{ border: "2px solid #C0C0C0" }}
                className="rounded-[10px] h-[54.5px] px-[10px] text-[18px] sm:text-[22px] text-[#C0C0C0] w-full"
              >
                <option value="">Рецепты завтраков</option>
              </select>

              <button className="bg-[#714424] text-[22px] sm:text-[25px] w-[180px] sm:w-[210px] h-[50px] rounded-[10px] text-white mx-auto sm:mx-0">
                Создать
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Add;
