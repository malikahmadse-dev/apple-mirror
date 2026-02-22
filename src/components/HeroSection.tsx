import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  dark?: boolean;
  large?: boolean;
}

const HeroSection = ({ title, subtitle, image, dark = false, large = false }: HeroSectionProps) => {
  return (
    <section className={`${dark ? "section-dark" : "section-light"} overflow-hidden`}>
      <div className="max-w-[1024px] mx-auto text-center pt-16 pb-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`font-semibold tracking-tight ${large ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"}`}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 text-xl md:text-2xl text-muted-foreground"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 flex items-center justify-center gap-6 text-xl"
        >
          <a href="#" className="apple-link">Learn more &gt;</a>
          <a href="#" className="apple-link">Buy &gt;</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8"
        >
          <img
            src={image}
            alt={title}
            className="w-full max-w-4xl mx-auto object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
