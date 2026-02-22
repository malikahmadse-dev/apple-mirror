import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const searchSuggestions = [
  { label: "iPhone 16 Pro", path: "/iphone" },
  { label: "MacBook Air", path: "/mac" },
  { label: "iPad Pro", path: "/ipad" },
  { label: "Apple Watch", path: "/watch" },
  { label: "AirPods Pro", path: "/airpods" },
  { label: "Apple Store", path: "/store" },
  { label: "TV & Home", path: "/tv-home" },
  { label: "Accessories", path: "/accessories" },
  { label: "Support", path: "/support" },
];

const quickLinks = [
  { label: "Visit the Apple Store", path: "/store" },
  { label: "Mac", path: "/mac" },
  { label: "iPad", path: "/ipad" },
  { label: "iPhone", path: "/iphone" },
  { label: "Apple Watch", path: "/watch" },
  { label: "AirPods", path: "/airpods" },
];

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const filtered = query.length > 0
    ? searchSuggestions.filter((s) =>
        s.label.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 z-[70] bg-background shadow-lg"
          >
            <div className="max-w-[680px] mx-auto px-4 py-4">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search apple.com"
                  className="flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground"
                />
                <button onClick={onClose}>
                  <X className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </button>
              </div>

              {query.length > 0 && filtered.length > 0 && (
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">
                    SUGGESTED
                  </p>
                  {filtered.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleSelect(item.path)}
                      className="block w-full text-left py-2 text-sm text-link-blue hover:underline"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}

              {query.length === 0 && (
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">
                    QUICK LINKS
                  </p>
                  {quickLinks.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleSelect(item.path)}
                      className="block w-full text-left py-2 text-sm text-link-blue hover:underline"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
