import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Айгерим С.",
    city: "Алматы",
    text: "Были на юбилее мамы — всё прошло идеально. Зал украшен по-казахски, бешпармак таял во рту. Гости до сих пор вспоминают! Обязательно вернёмся на Курбан-Байрам.",
    stars: 5,
  },
  {
    name: "Руслан М.",
    city: "Москва",
    text: "Приехал в командировку, случайно зашёл — и не пожалел ни разу. Куырдак как у бабушки в Казахстане. Калмыцкий чай с бауырсаками — это вообще отдельная история. Уже советую всем коллегам.",
    stars: 5,
  },
  {
    name: "Зарина К.",
    city: "Алматы",
    text: "Отмечали зубок — ресторан превзошёл все ожидания. Персонал внимательный, атмосфера тёплая. Чувствуешь себя как дома, только ещё вкуснее.",
    stars: 5,
  },
  {
    name: "Дмитрий В.",
    city: "Санкт-Петербург",
    text: "Впервые попробовал настоящий казахский дастархан. Манты, сорпа, несколько сортов чая — всё свежее и с душой. Лучший ресторан, в котором я был за последние годы.",
    stars: 5,
  },
  {
    name: "Фатима Н.",
    city: "Алматы",
    text: "Праздновали Ураза-Байрам всей семьёй — 30 человек. Организовали быстро, меню согласовали заранее. Все остались довольны, детям особенно понравились бауырсаки.",
    stars: 5,
  },
  {
    name: "Серик Д.",
    city: "Нур-Султан",
    text: "Часто бываю в командировках и всегда ищу что-то настоящее. Дастархан — именно то место. Вкус как в ауле, сервис как в ресторане высокого класса. Лучший в области.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="Star" size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={container} id="reviews" className="bg-neutral-50 py-20 overflow-hidden">
      <div className="px-6 max-w-5xl mx-auto mb-12">
        <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-3">Отзывы гостей</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
          Они уже побывали<br />у нас
        </h2>
      </div>

      <motion.div style={{ x: x1 }} className="flex gap-6 mb-6 px-6">
        {reviews.slice(0, 3).map((r) => (
          <div
            key={r.name}
            className="min-w-[320px] md:min-w-[380px] bg-white border border-neutral-200 p-6 shrink-0"
          >
            <Stars count={r.stars} />
            <p className="text-neutral-700 text-sm leading-relaxed mb-6">«{r.text}»</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{r.name[0]}</span>
              </div>
              <div>
                <p className="text-neutral-900 font-semibold text-sm">{r.name}</p>
                <p className="text-neutral-400 text-xs">{r.city}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div style={{ x: x2 }} className="flex gap-6 px-6">
        {reviews.slice(3).map((r) => (
          <div
            key={r.name}
            className="min-w-[320px] md:min-w-[380px] bg-white border border-neutral-200 p-6 shrink-0"
          >
            <Stars count={r.stars} />
            <p className="text-neutral-700 text-sm leading-relaxed mb-6">«{r.text}»</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{r.name[0]}</span>
              </div>
              <div>
                <p className="text-neutral-900 font-semibold text-sm">{r.name}</p>
                <p className="text-neutral-400 text-xs">{r.city}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
