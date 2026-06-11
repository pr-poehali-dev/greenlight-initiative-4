import { useState } from "react";
import Icon from "@/components/ui/icon";

const events = [
  { icon: "Cake", label: "День рождения", desc: "Украсим зал, подготовим праздничный стол и торт" },
  { icon: "Baby", label: "Зубок ребёнку", desc: "Тёплый семейный праздник встречи нового человека" },
  { icon: "Star", label: "Курбан-Байрам", desc: "Традиционный праздничный дастархан для всей семьи" },
  { icon: "Moon", label: "Ураза-Байрам", desc: "Ифтар и праздничный ужин по окончании поста" },
  { icon: "Heart", label: "Свадьба / Никах", desc: "Банкетный зал для самого важного торжества" },
  { icon: "Users", label: "Корпоратив", desc: "Деловой ужин или праздник для вашей команды" },
];

export default function Events() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
    date: "",
    guests: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="events" className="bg-neutral-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.4em] text-xs text-neutral-500 mb-3">Банкетный зал</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Забронировать зал<br />для мероприятия
        </h2>
        <p className="text-neutral-400 mb-12 max-w-xl">
          Зал на <span className="text-white font-semibold">50 мест</span> — для вашего праздника в окружении близких. Выберите повод, и мы подготовим всё заранее.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-14">
          {events.map((ev) => (
            <button
              key={ev.label}
              type="button"
              onClick={() => setForm((f) => ({ ...f, event: ev.label }))}
              className={`text-left p-4 border transition-all duration-200 group ${
                form.event === ev.label
                  ? "border-white bg-white/10"
                  : "border-neutral-700 hover:border-neutral-500"
              }`}
            >
              <Icon name={ev.icon} size={20} className="text-neutral-400 mb-2 group-hover:text-white transition-colors" />
              <p className="text-white text-sm font-semibold">{ev.label}</p>
              <p className="text-neutral-500 text-xs mt-1 leading-snug">{ev.desc}</p>
            </button>
          ))}
        </div>

        {sent ? (
          <div className="border border-neutral-700 p-8 text-center">
            <Icon name="CheckCircle" size={40} className="text-white mx-auto mb-4" />
            <p className="text-white text-xl font-bold mb-2">Заявка отправлена!</p>
            <p className="text-neutral-400">Мы свяжемся с вами в течение часа для подтверждения бронирования.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
            <input
              required
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="bg-transparent border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <input
              required
              placeholder="Номер телефона"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="bg-transparent border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <input
              required
              type="date"
              value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
              className="bg-transparent border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors [color-scheme:dark]"
            />
            <input
              required
              placeholder="Количество гостей (до 50)"
              type="number"
              min={1}
              max={50}
              value={form.guests}
              onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
              className="bg-transparent border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-white text-black py-3 uppercase tracking-widest text-sm font-bold hover:bg-neutral-200 transition-colors"
              >
                Отправить заявку на бронирование
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
