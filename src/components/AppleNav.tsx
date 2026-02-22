import { useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  "Store", "Mac", "iPad", "iPhone", "Watch", "AirPods",
  "TV & Home", "Entertainment", "Accessories", "Support",
];

const AppleNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1024px] mx-auto flex items-center justify-between h-11 px-4 lg:px-0">
        {/* Apple Logo */}
        <a href="#" className="text-nav-foreground">
          <svg width="14" height="18" viewBox="0 0 17 21" fill="currentColor">
            <path d="M15.5 17.4c-.8 1.2-1.6 2.3-2.9 2.3-1.3 0-1.6-.7-3.1-.7s-1.9.7-3.1.8C5 19.8 4.1 18.5 3.3 17.3 1.5 14.6.2 9.7 2.1 6.5c.9-1.6 2.6-2.6 4.3-2.7 1.2 0 2.4.8 3.1.8.7 0 2.1-1 3.6-.9.6 0 2.3.2 3.4 1.9-.1.1-2 1.2-2 3.6 0 2.8 2.5 3.8 2.5 3.8 0 .1-.4 1.3-1.3 2.6zM12.3 0c-1.2.1-2.6.8-3.4 1.7-.7.8-1.4 2.1-1.2 3.3 1.3.1 2.6-.7 3.4-1.6.7-.9 1.3-2.1 1.2-3.4z"/>
          </svg>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-nav-foreground/80 hover:text-nav-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-4 h-4 text-nav-foreground/80 cursor-pointer hover:text-nav-foreground transition-colors" />
          <ShoppingBag className="w-4 h-4 text-nav-foreground/80 cursor-pointer hover:text-nav-foreground transition-colors" />
          <button
            className="lg:hidden text-nav-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-nav-bg border-t border-border overflow-hidden"
          >
            <div className="max-w-[1024px] mx-auto py-4 px-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-3 text-sm font-semibold text-nav-foreground border-b border-border last:border-0"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default AppleNav;
