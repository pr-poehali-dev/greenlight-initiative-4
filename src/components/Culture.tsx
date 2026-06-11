export default function Culture() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-neutral-950">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-1">
        <img
          src="https://cdn.poehali.dev/projects/4c8876ee-fbb9-40ce-a495-a06b85eedd65/files/8e98ca25-67d6-4710-885d-524eae211872.jpg"
          alt="Казахская национальная одежда — платки и тюбитейка"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:ml-16 lg:order-2">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Национальная одежда</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-white leading-tight">
          Казахские платки и тюбитейки — живое наследие народа, вытканное орнаментами и преданиями предков.
        </p>
        <div className="flex flex-col gap-6 mb-10">
          <div className="border-l border-neutral-700 pl-5">
            <p className="text-white font-semibold mb-1">Казахские платки (орамал)</p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Расшитые золотом и шёлком платки — символ женской красоты и скромности. Каждый узор несёт своё значение: цветы, птицы и степные орнаменты передаются из рук в руки через поколения.
            </p>
          </div>
          <div className="border-l border-neutral-700 pl-5">
            <p className="text-white font-semibold mb-1">Тюбитейка (тақия)</p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Мужской головной убор с геометрическими узорами — неотъемлемая часть казахского костюма. Вышивка на тюбитейке отражала принадлежность к роду и мастерство матери или жены.
            </p>
          </div>
          <div className="border-l border-neutral-700 pl-5">
            <p className="text-white font-semibold mb-1">Традиции за столом</p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              В нашем ресторане гости могут прийти в национальной одежде — мы рады каждому, кто чтит культуру и дорожит традициями казахского народа.
            </p>
          </div>
        </div>
        <a
          href="#events"
          className="border border-white text-white px-5 py-2.5 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Отметить праздник у нас
        </a>
      </div>
    </div>
  );
}
