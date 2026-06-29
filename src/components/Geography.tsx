import { motion } from "framer-motion";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const regions = [
  { name: "Европа", routes: "Роттердам · Гамбург · Антверпен" },
  { name: "Азия", routes: "Шанхай · Сингапур · Дубай" },
  { name: "Северная Америка", routes: "Лос-Анджелес · Нью-Йорк" },
  { name: "Ближний Восток", routes: "Джебель-Али · Доха" },
  { name: "Африка", routes: "Дурбан · Касабланка" },
];

export default function Geography() {
  const [active, setActive] = useState(0);

  return (
    <section id="geography" className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-sm uppercase tracking-[0.2em]">
          География
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12 leading-tight">
          Маршруты по всему миру
        </h2>

        <div className="grid lg:grid-cols-[280px_1fr_280px] gap-8 items-stretch">
          <div className="flex flex-col gap-2">
            {regions.map((region, i) => (
              <button
                key={region.name}
                onClick={() => setActive(i)}
                className={`text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                  active === i
                    ? "bg-primary text-primary-foreground"
                    : "glass-card text-white hover:border-primary/40"
                }`}
              >
                <span className="font-medium">{region.name}</span>
              </button>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden glass-card min-h-[360px]">
            <img
              src="https://cdn.poehali.dev/projects/d824255f-7d9e-474c-8f78-61e7e440d340/files/2dec8b08-ddbb-4e58-b874-e53c020567cc.jpg"
              alt="Карта мира с маршрутами"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-center"
          >
            <Icon name="MapPin" size={28} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{regions[active].name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ключевые хабы: {regions[active].routes}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
