import AppleNav from "@/components/AppleNav";
import AppleFooter from "@/components/AppleFooter";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, ChevronRight } from "lucide-react";

const supportTopics = [
  { title: "iPhone", desc: "Explore topics and get help with your iPhone." },
  { title: "Mac", desc: "Find support articles and get help with your Mac." },
  { title: "iPad", desc: "Get help with your iPad." },
  { title: "Apple Watch", desc: "Get help with your Apple Watch." },
  { title: "AirPods", desc: "Find support for your AirPods." },
  { title: "Apple ID & iCloud", desc: "Manage your account and storage." },
];

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppleNav />
      <div className="h-11" />
      <section className="max-w-[1024px] mx-auto px-4 pt-16 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-center">Apple Support</h1>
          <p className="text-xl text-muted-foreground mt-2 text-center mb-12">We're here to help.</p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[
            { icon: MessageCircle, label: "Chat", desc: "Chat with us online" },
            { icon: Phone, label: "Call", desc: "Talk to an expert" },
            { icon: Mail, label: "Email", desc: "Send us a message" },
          ].map((item) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-6 text-center hover:bg-accent transition-colors"
            >
              <item.icon className="w-8 h-8 mx-auto text-primary mb-3" />
              <h3 className="font-semibold">{item.label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </motion.button>
          ))}
        </div>

        {/* Topics */}
        <h2 className="text-2xl font-semibold mb-6">Browse by product</h2>
        <div className="space-y-2">
          {supportTopics.map((topic) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary transition-colors cursor-pointer group"
            >
              <div>
                <h3 className="font-medium">{topic.title}</h3>
                <p className="text-sm text-muted-foreground">{topic.desc}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </motion.div>
          ))}
        </div>
      </section>
      <AppleFooter />
    </div>
  );
};

export default SupportPage;
