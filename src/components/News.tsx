import { motion } from "framer-motion";

const news = [
  {
    image:
      "https://cdn.poehali.dev/projects/d824255f-7d9e-474c-8f78-61e7e440d340/files/988b019a-3343-4eef-91db-73946f0412c1.jpg",
    date: "12 июня 2026",
    title: "Открыт новый морской маршрут в Юго-Восточную Азию",
    desc: "Запустили прямую контейнерную линию, сократив сроки доставки на 30%.",
  },
  {
    image:
      "https://cdn.poehali.dev/projects/d824255f-7d9e-474c-8f78-61e7e440d340/files/984173e8-38ca-4dec-bdae-b53295670ed2.jpg",
    date: "28 мая 2026",
    title: "Новый складской хаб класса А в Европе",
    desc: "15 000 м² современных площадей для фулфилмента и хранения грузов.",
  },
  {
    image:
      "https://cdn.poehali.dev/projects/d824255f-7d9e-474c-8f78-61e7e440d340/files/2dec8b08-ddbb-4e58-b874-e53c020567cc.jpg",
    date: "5 мая 2026",
    title: "Цифровая платформа отслеживания грузов",
    desc: "Запустили онлайн-кабинет с трекингом и аналитикой в реальном времени.",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-sm uppercase tracking-[0.2em]">
          Новости
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12 leading-tight">
          Что нового в компании
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs uppercase tracking-wide">
                  {item.date}
                </span>
                <h3 className="text-lg font-bold mt-2 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
