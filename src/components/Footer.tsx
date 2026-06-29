import Icon from "@/components/ui/icon";

const columns = [
  {
    title: "Компания",
    links: ["О компании", "Команда", "Карьера", "Новости"],
  },
  {
    title: "Услуги",
    links: ["Морские перевозки", "Авиадоставка", "Автоперевозки", "Таможня"],
  },
  {
    title: "География",
    links: ["Европа", "Азия", "Америка", "Африка"],
  },
  {
    title: "Контакты",
    links: ["+7 (495) 123-45-67", "info@transglobal.com", "Москва"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-white mb-4">
              <Icon name="Ship" size={26} className="text-primary" />
              <span className="text-lg font-bold tracking-tight uppercase">
                Trans<span className="text-primary">Global</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Международная логистика без границ.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TransGlobal. Все права защищены.
          </p>
          <div className="flex gap-4">
            {["Send", "Linkedin", "Youtube", "Instagram"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white hover:text-primary hover:border-primary/40 transition-all"
              >
                <Icon name={icon} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
