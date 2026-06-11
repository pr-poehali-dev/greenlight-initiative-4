import Icon from "@/components/ui/icon";

const info = [
  {
    icon: "MapPin",
    label: "Адрес",
    value: "г. Алматы, ул. Абая 42, уголок Достык",
    link: "https://2gis.kz/almaty",
  },
  {
    icon: "Clock",
    label: "Режим работы",
    value: "Пн–Вс: 10:00 — 23:00",
    link: null,
  },
  {
    icon: "Phone",
    label: "Телефон",
    value: "+7 (727) 123-45-67",
    link: "tel:+77271234567",
  },
  {
    icon: "MessageCircle",
    label: "WhatsApp",
    value: "Написать в WhatsApp",
    link: "https://wa.me/77271234567",
  },
];

export default function Contacts() {
  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-3">Контакты</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Найдите нас
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {info.map((item) => (
            <div key={item.label}>
              <Icon name={item.icon} size={24} className="text-neutral-400 mb-3" />
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">{item.label}</p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 font-semibold hover:text-neutral-500 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-neutral-900 font-semibold">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="border border-neutral-200 overflow-hidden h-72">
          <iframe
            title="Карта ресторана Дастархан"
            src="https://maps.google.com/maps?q=Алматы+улица+Абая+42&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
