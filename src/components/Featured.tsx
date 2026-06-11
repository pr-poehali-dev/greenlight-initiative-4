export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/4c8876ee-fbb9-40ce-a495-a06b85eedd65/files/4dd283c1-c2cb-4f6a-8edc-a375fc614a93.jpg"
          alt="Бешпармак — главное блюдо казахской кухни"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Сердце казахской кухни</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Бешпармак, куырдак, бауырсаки — блюда, приготовленные по рецептам, передающимся из поколения в поколение.
          Каждое блюдо — это история, вкус и тепло казахского гостеприимства.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
            <span className="text-sm uppercase tracking-wide">Бешпармак — блюдо из баранины с домашней лапшой</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
            <span className="text-sm uppercase tracking-wide">Куырдак — жареные субпродукты с луком и специями</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
            <span className="text-sm uppercase tracking-wide">Бауырсаки — пышные жареные лепёшки к чаю</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Смотреть меню
        </button>
      </div>
    </div>
  );
}