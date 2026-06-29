import { motion } from "framer-motion";

export default function Promo() {
  return (
    <section className="bg-background py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          Ваш маршрут к новым
          <br />
          <span className="text-primary">возможностям</span> начинается здесь
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Мы берём на себя всю сложность международной логистики, чтобы вы могли
          сосредоточиться на росте бизнеса. Один партнёр — полный контроль над
          вашей цепочкой поставок.
        </p>
      </motion.div>
    </section>
  );
}
