import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  subtitle: string;
  image: string;
  dark?: boolean;
}

const ProductCard = ({ title, subtitle, image, dark = false }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${dark ? "section-dark" : "section-light"} rounded-none overflow-hidden flex flex-col items-center text-center pt-14 pb-0 min-h-[580px]`}
    >
      <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-lg text-muted-foreground">{subtitle}</p>
      <div className="mt-3 flex items-center gap-6 text-lg">
        <a href="#" className="apple-link">Learn more &gt;</a>
        <a href="#" className="apple-link">Buy &gt;</a>
      </div>
      <div className="mt-auto flex-1 flex items-end">
        <img
          src={image}
          alt={title}
          className="w-full max-w-md mx-auto object-contain"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default ProductCard;
