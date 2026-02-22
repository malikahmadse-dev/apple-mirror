import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import AppleNav from "@/components/AppleNav";
import AppleFooter from "@/components/AppleFooter";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <AppleNav />
        <div className="h-11" />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-2">Product not found</h1>
            <Link to="/store" className="apple-link">Visit the Store &gt;</Link>
          </div>
        </div>
        <AppleFooter />
      </div>
    );
  }

  const handleAddToBag = () => {
    addItem({
      id: product.id + (product.colors ? `-${product.colors[selectedColor].name}` : ""),
      name: product.name,
      price: product.price,
      image: product.image,
      color: product.colors?.[selectedColor]?.name,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <AppleNav />
      <div className="h-11" />

      {/* Breadcrumb */}
      <div className="max-w-[1024px] mx-auto px-4 py-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/${product.category.toLowerCase().replace(/ & /g, "-")}`} className="hover:text-foreground transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="max-w-[1024px] mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-lg mx-auto object-contain rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {product.isNew && (
              <span className="text-xs font-medium text-link-blue">New</span>
            )}
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-1">
              {product.name}
            </h1>
            <p className="text-xl text-muted-foreground mt-2">{product.tagline}</p>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              {product.description}
            </p>

            <p className="text-2xl font-semibold mt-6">
              From ${product.price.toLocaleString()}
            </p>

            {/* Color Picker */}
            {product.colors && (
              <div className="mt-6">
                <p className="text-sm font-medium mb-3">
                  Color — {product.colors[selectedColor].name}
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(idx)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        idx === selectedColor
                          ? "border-primary scale-110"
                          : "border-border hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {product.features && (
              <ul className="mt-6 space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {/* Add to Bag */}
            <button
              onClick={handleAddToBag}
              className="mt-8 w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Add to Bag
            </button>
          </motion.div>
        </div>
      </section>

      <AppleFooter />
    </div>
  );
};

export default ProductDetail;
