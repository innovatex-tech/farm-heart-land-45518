import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatsappNumber = "252615575343";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="shadow-xl"
      >
        <Button
          size="lg"
          className="flex items-center gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] px-5 py-3"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-wide">WhatsApp</span>
        </Button>
      </motion.a>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="rounded-full bg-white/90 p-3 shadow-xl backdrop-blur"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-slate-800" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
