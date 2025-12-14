const Communications = () => {
  return (
    <section className="py-10 bg-[#8D71465E]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-center text-4xl md:text-5xl lg:text-[48px] text-[#380202]">
            Давайте оставаться на связи!
          </h1>
          <p className="text-center text-xl md:text-2xl lg:text-[30px] text-[#3802029C]">
            Подпишитесь на нашу рассылку, чтобы мы могли сообщать <br /> вам
            наши новости и предложения
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
            <input
              style={{
                border: "2px solid #714424",
              }}
              className="bg-white rounded-lg w-full sm:w-[600px] h-[55px] px-5 text-base md:text-lg"
              type="text"
              placeholder="Напиши Cвой Email"
            />
            <button className="w-full sm:w-[215px] h-[55px] rounded-lg text-white bg-[#714424] text-base md:text-lg">
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communications;
