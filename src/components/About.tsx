import { motion } from "framer-motion";

const stats = [
  { value: "120+", label: "стран" },
  { value: "3 500+", label: "клиентов" },
  { value: "1.2 млн", label: "перевозок" },
  { value: "2 400", label: "сотрудников" },
  { value: "180+", label: "партнёров" },
];

export default function About() {
  return (
    <section id="about" className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em]">
            О компании
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
            Глобальная сеть, которой доверяют
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Уже более 20 лет мы организуем сложные международные перевозки,
            объединяя морские порты, аэропорты и наземные маршруты в единую
            технологичную цепочку. Прозрачность, скорость и контроль на каждом
            этапе — наш стандарт.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 shadow-lg hover:scale-105 hover:border-primary/40 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
