import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "ShieldCheck",
    title: "Надёжность",
    desc: "Страхование грузов и гарантия сохранности на каждом этапе.",
  },
  {
    icon: "Zap",
    title: "Скорость",
    desc: "Оптимальные маршруты и контроль сроков в реальном времени.",
  },
  {
    icon: "Globe",
    title: "Глобальная сеть",
    desc: "Собственные представительства и партнёры в 120 странах.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    desc: "Персональный менеджер и сопровождение в любое время суток.",
  },
  {
    icon: "FileCheck",
    title: "Документы под ключ",
    desc: "Полное таможенное оформление без лишней бюрократии.",
  },
  {
    icon: "TrendingUp",
    title: "Прозрачность",
    desc: "Понятное ценообразование и отслеживание груза онлайн.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-background py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-sm uppercase tracking-[0.2em]">
          Преимущества
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12 leading-tight">
          Почему выбирают нас
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card rounded-2xl p-8 hover:scale-[1.03] hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Icon name={feature.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
