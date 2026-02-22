import AppleNav from "@/components/AppleNav";
import AppleFooter from "@/components/AppleFooter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const entertainmentServices = [
  { name: "Apple Music", desc: "Over 100 million songs. Zero ads.", price: "From $10.99/mo." },
  { name: "Apple TV+", desc: "Original shows and movies from the world's greatest storytellers.", price: "From $9.99/mo." },
  { name: "Apple Arcade", desc: "200+ incredibly fun games. No ads. No in-app purchases.", price: "From $6.99/mo." },
  { name: "iCloud+", desc: "All your photos, files, and more — safe and available wherever you are.", price: "From $0.99/mo." },
  { name: "Apple One", desc: "Bundle up to six Apple services. And enjoy more for less.", price: "From $19.95/mo." },
];

const EntertainmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppleNav />
      <div className="h-11" />
      <section className="max-w-[1024px] mx-auto px-4 pt-16 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Entertainment</h1>
          <p className="text-xl text-muted-foreground mt-2 mb-10">Discover all the ways to enjoy your favorite content.</p>
        </motion.div>
        <div className="space-y-4">
          {entertainmentServices.map((service) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h3 className="text-2xl font-semibold">{service.name}</h3>
                <p className="text-muted-foreground mt-1">{service.desc}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-semibold">{service.price}</p>
                <Link to="#" className="apple-link text-sm mt-1 inline-block">Try it free &gt;</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <AppleFooter />
    </div>
  );
};

export default EntertainmentPage;
