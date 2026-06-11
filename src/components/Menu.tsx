const dishes = [
  {
    category: "Горячие блюда",
    items: [
      { name: "Бешпармак", desc: "Баранина с домашней лапшой и луковым соусом", price: "3 200 ₸" },
      { name: "Куырдак", desc: "Жареные субпродукты с луком, картофелем и специями", price: "2 400 ₸" },
      { name: "Манты", desc: "Паровые пельмени с сочной бараниной и луком", price: "1 800 ₸" },
      { name: "Сорпа", desc: "Наваристый бульон с бараниной и зеленью", price: "1 200 ₸" },
    ],
  },
  {
    category: "Выпечка",
    items: [
      { name: "Бауырсаки", desc: "Пышные жареные лепёшки — к чаю или супу", price: "600 ₸" },
      { name: "Самса", desc: "Треугольные пирожки с бараниной из тандыра", price: "400 ₸" },
      { name: "Шелпек", desc: "Тонкие обжаренные лепёшки к чаю", price: "400 ₸" },
    ],
  },
  {
    category: "Чайная карта",
    items: [
      { name: "Калмыцкий чай", desc: "Чай с молоком, маслом и щепоткой соли", price: "700 ₸" },
      { name: "Чай с чабрецом", desc: "Душистый травяной сбор на горных травах", price: "600 ₸" },
      { name: "Чай с шиповником", desc: "Богатый витаминами ягодный настой", price: "650 ₸" },
      { name: "Кок-чай", desc: "Классический зелёный чай с ароматными специями", price: "550 ₸" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-neutral-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-3">Наше меню</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
          Изысканные блюда<br />казахской кухни
        </h2>

        <div className="grid gap-16">
          {dishes.map((section) => (
            <div key={section.category}>
              <h3 className="uppercase text-xs tracking-widest text-neutral-400 border-b border-neutral-200 pb-3 mb-6">
                {section.category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start gap-4 group"
                  >
                    <div>
                      <p className="text-neutral-900 font-semibold text-lg group-hover:text-neutral-600 transition-colors">
                        {item.name}
                      </p>
                      <p className="text-neutral-500 text-sm mt-1">{item.desc}</p>
                    </div>
                    <span className="text-neutral-900 font-bold text-sm shrink-0 mt-1">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
