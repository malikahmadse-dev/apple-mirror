import AppleNav from "@/components/AppleNav";
import AppleFooter from "@/components/AppleFooter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const accessories = [
  { name: "MagSafe Charger", price: 39, category: "Charging" },
  { name: "Apple Pencil Pro", price: 129, category: "iPad" },
  { name: "Magic Keyboard", price: 299, category: "Mac" },
  { name: "AirTag", price: 29, category: "Tracking" },
  { name: "iPhone 16 Case", price: 49, category: "iPhone" },
  { name: "Apple Watch Band", price: 49, category: "Watch" },
];

const AccessoriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppleNav />
      <div className="h-11" />
      <section className="max-w-[1024px] mx-auto px-4 pt-16 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Accessories</h1>
          <p className="text-xl text-muted-foreground mt-2 mb-10">Find the perfect complement to your favorite devices.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessories.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 text-center"
            >
              <span className="text-xs text-muted-foreground">{item.category}</span>
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-sm font-semibold mt-1">${item.price}</p>
              <Link to="/store" className="apple-link text-sm mt-3 inline-block">Shop &gt;</Link>
            </motion.div>
          ))}
        </div>
      </section>
      <AppleFooter />
    </div>
  );
};

export default AccessoriesPage;
