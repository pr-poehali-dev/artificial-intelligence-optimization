import { useState } from "react";

const services = [
  {
    title: "Морские перевозки",
    desc: "Контейнерные и сборные грузы FCL/LCL по основным океанским линиям.",
  },
  {
    title: "Авиадоставка",
    desc: "Срочная доставка грузов по воздуху в любую точку мира за 1–3 дня.",
  },
  {
    title: "Автоперевозки",
    desc: "Магистральные и последняя миля — полные и сборные грузы по континенту.",
  },
  {
    title: "Таможенное оформление",
    desc: "Полное сопровождение и декларирование под ключ без задержек.",
  },
  {
    title: "Складская логистика",
    desc: "Хранение, комплектация и фулфилмент на складах класса А.",
  },
  {
    title: "Проектная логистика",
    desc: "Перевозка негабаритных и сложных грузов с инженерным расчётом.",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-sm uppercase tracking-[0.2em]">
          Наши услуги
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12 leading-tight">
          Полный спектр решений
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6 scrollbar-hide">
          {services.map((service, i) => (
            <div
              key={service.title}
              onMouseEnter={() => setActive(i)}
              className={`snap-start shrink-0 w-[300px] rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-white"
              }`}
            >
              <div
                className={`text-6xl font-bold mb-6 ${
                  active === i ? "text-primary-foreground/40" : "text-primary/40"
                }`}
              >
                0{i + 1}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p
                className={`text-sm leading-relaxed ${
                  active === i
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
