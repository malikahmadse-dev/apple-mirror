import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import AppleNav from "@/components/AppleNav";
import AppleFooter from "@/components/AppleFooter";

const categories = [
  { label: "Mac", path: "/mac" },
  { label: "iPhone", path: "/iphone" },
  { label: "iPad", path: "/ipad" },
  { label: "Apple Watch", path: "/watch" },
  { label: "AirPods", path: "/airpods" },
  { label: "TV & Home", path: "/tv-home" },
  { label: "Accessories", path: "/accessories" },
];

const StorePage = () => {
  const { addItem } = useCart();
  const latestProducts = products.filter((p) => p.isNew);

  return (
    <div className="min-h-screen bg-background">
      <AppleNav />
      <div className="h-11" />

      {/* Store Hero */}
      <section className="max-w-[1024px] mx-auto px-4 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-muted-foreground text-lg">Store.</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-1">
            The best way to buy the <br className="hidden md:block" />products you love.
          </h1>
        </motion.div>
      </section>

      {/* Category Pills */}
      <section className="max-w-[1024px] mx-auto px-4 pb-10">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              className="flex-shrink-0 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Section */}
      <section className="max-w-[1024px] mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-1">The latest.</h2>
        <p className="text-muted-foreground mb-8">Take a look at what's new, right now.</p>

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
          {latestProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[320px] snap-start bg-secondary rounded-2xl overflow-hidden group"
            >
              <Link to={`/product/${product.id}`}>
                <div className="h-[280px] flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="p-5">
                {product.isNew && (
                  <span className="text-xs font-medium text-link-blue">New</span>
                )}
                <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{product.tagline}</p>
                <p className="text-sm font-semibold mt-2">From ${product.price.toLocaleString()}</p>
                <button
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })
                  }
                  className="mt-3 px-5 py-2 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  Add to Bag
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="max-w-[1024px] mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-8">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl overflow-hidden group flex flex-col"
            >
              <Link to={`/product/${product.id}`} className="h-[220px] flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{product.tagline}</p>
                <div className="mt-auto pt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold">${product.price.toLocaleString()}</span>
                  <button
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })
                    }
                    className="px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:opacity-90 transition-opacity"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AppleFooter />
    </div>
  );
};

export default StorePage;
