import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Icon from "@/components/ui/icon";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/d824255f-7d9e-474c-8f78-61e7e440d340/files/988b019a-3343-4eef-91db-73946f0412c1.jpg"
          alt="Контейнеровоз в океане"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-left text-white px-6 max-w-7xl mx-auto w-full"
      >
        <span className="inline-block text-primary text-sm uppercase tracking-[0.2em] mb-6">
          Международная логистика
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
          Доставляем мир
          <br />
          ближе
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-10 text-white/80">
          Морские, авиа и наземные перевозки по всему миру. Надёжная цепочка
          поставок для вашего бизнеса — от склада до двери.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            <Icon name="MessageSquare" size={18} />
            Получить консультацию
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors"
          >
            <Icon name="Calculator" size={18} />
            Рассчитать стоимость
          </a>
        </div>
      </motion.div>
    </div>
  );
}
