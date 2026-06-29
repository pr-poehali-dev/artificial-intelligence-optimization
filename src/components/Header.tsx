import Icon from "@/components/ui/icon";

interface HeaderProps {
  className?: string;
}

const navLinks = [
  { href: "#about", label: "О компании" },
  { href: "#geography", label: "География" },
  { href: "#services", label: "Услуги" },
  { href: "#news", label: "Новости" },
  { href: "#contact", label: "Контакты" },
];

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={`absolute top-0 left-0 right-0 z-20 px-6 py-5 ${className ?? ""}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-white">
          <Icon name="Ship" size={26} className="text-primary" />
          <span className="text-lg font-bold tracking-tight uppercase">
            Trans<span className="text-primary">Global</span>
          </span>
        </div>

        <nav className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-primary transition-colors duration-300 text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-1 text-white/80 hover:text-primary transition-colors text-sm">
            RU <span className="text-white/30">/</span> EN
          </button>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Icon name="Phone" size={16} />
            <span className="hidden sm:inline">Контакты</span>
          </a>
        </div>
      </div>
    </header>
  );
}
