import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getProductsByCategory, Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import AppleNav from "@/components/AppleNav";
import AppleFooter from "@/components/AppleFooter";

interface CategoryPageProps {
  category: string;
  title: string;
  subtitle: string;
  dark?: boolean;
}

const ProductGridCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-secondary rounded-2xl overflow-hidden flex flex-col items-center text-center p-8 min-h-[420px] group"
    >
      {product.isNew && (
        <span className="text-xs font-medium text-link-blue mb-2">New</span>
      )}
      <h3 className="text-2xl font-semibold">{product.name}</h3>
      <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
      <p className="text-lg font-semibold mt-2">From ${product.price.toLocaleString()}</p>
      <div className="flex gap-4 mt-3 text-sm">
        <Link to={`/product/${product.id}`} className="apple-link">Learn more &gt;</Link>
        <button
          onClick={() =>
            addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            })
          }
          className="apple-link"
        >
          Add to Bag &gt;
        </button>
      </div>
      <Link to={`/product/${product.id}`} className="mt-auto pt-6 flex-1 flex items-end">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-xs mx-auto object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </Link>
    </motion.div>
  );
};

const CategoryPage = ({ category, title, subtitle, dark }: CategoryPageProps) => {
  const categoryProducts = getProductsByCategory(category);
  const hero = categoryProducts[0];

  return (
    <div className="min-h-screen bg-background">
      <AppleNav />
      <div className="h-11" />

      {/* Hero */}
      {hero && (
        <section className={`${dark ? "section-dark" : "section-light"} overflow-hidden`}>
          <div className="max-w-[1024px] mx-auto text-center pt-20 pb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-semibold tracking-tight"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mt-2"
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-10"
            >
              <Link to={`/product/${hero.id}`}>
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full max-w-3xl mx-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Product Grid */}
      <section className="max-w-[1024px] mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-2">Explore {category}</h2>
        <p className="text-muted-foreground mb-10">Find the {category.toLowerCase()} that's right for you.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {categoryProducts.map((product) => (
            <ProductGridCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <AppleFooter />
    </div>
  );
};

export default CategoryPage;
