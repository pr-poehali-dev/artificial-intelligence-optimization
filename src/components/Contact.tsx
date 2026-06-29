import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const contacts = [
  { icon: "MapPin", label: "Главный офис", value: "Москва, ул. Портовая, 12" },
  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
  { icon: "Mail", label: "Email", value: "info@transglobal.com" },
  { icon: "Clock", label: "Режим работы", value: "Пн–Пт 9:00–19:00" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em]">
            Связаться
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
            Остались вопросы?
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Имя"
              className="w-full glass-card rounded-xl px-5 py-4 text-white placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full glass-card rounded-xl px-5 py-4 text-white placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full glass-card rounded-xl px-5 py-4 text-white placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Сообщение"
              rows={4}
              className="w-full glass-card rounded-xl px-5 py-4 text-white placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="button"
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Отправить
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center gap-6"
        >
          {contacts.map((c) => (
            <div key={c.label} className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name={c.icon} size={22} className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{c.label}</div>
                <div className="text-lg font-medium">{c.value}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
