import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

type HeroContactFormProps = {
  onClose: () => void;
};

const HeroContactForm = ({ onClose }: HeroContactFormProps) => {
  const [state, handleSubmit] = useForm("xnnoggbl");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-4 text-center bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-md shadow-xl"
      >
        <span className="text-sm uppercase tracking-[0.3em] text-white/70">
          Message Sent
        </span>
        <h3 className="text-2xl font-semibold text-white">
          Thanks for reaching out!
        </h3>
        <p className="text-white/70 text-base">
          We&apos;ll connect with you shortly to talk through your needs.
        </p>
        <Button
          onClick={onClose}
          className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-black font-semibold rounded-full px-6 py-4"
        >
          Close
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-md shadow-xl space-y-6"
    >
      <div className="space-y-3">
        <label
          htmlFor="email"
          className="text-sm uppercase tracking-[0.3em] text-white/70"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-2xl bg-black/40 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-sm text-red-300"
        />
      </div>

      <div className="space-y-3">
        <label
          htmlFor="message"
          className="text-sm uppercase tracking-[0.3em] text-white/70"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Share a bit about your project or produce needs..."
          className="w-full rounded-2xl bg-black/40 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] resize-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-sm text-red-300"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={state.submitting}
        className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-black font-semibold text-base md:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide disabled:opacity-70"
      >
        {state.submitting ? "Sending..." : "Request Details"}
      </Button>
    </form>
  );
};

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-4 md:p-8 lg:p-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Framed Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto border-4 border-[hsl(var(--accent))] rounded-[2rem] md:rounded-[3rem] overflow-hidden backdrop-blur-sm bg-gradient-to-b from-black/20 to-black/40 shadow-2xl"
      >
        {/* Inner Content Container */}
        <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center p-8 md:p-16">
          {/* Content */}
          <div className="max-w-3xl text-left space-y-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light"
              >
                Central Africa Trading Company
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase"
              >
                Best Harvest
                <br />
                In The World
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white/80 text-base md:text-lg mb-8 max-w-xl"
              >
                Grown with Care, Delivered with Heart. Premium Sesame, Maize, Watermelon, and the services that bring them to life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button
                  size="lg"
                  onClick={openModal}
                  className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-black font-semibold text-base md:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
                >
                  Request a Quote
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Play Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
            aria-label="Play introduction video"
          >
            <Play className="w-6 h-6 md:w-8 md:h-8 text-black fill-black ml-1" />
          </motion.button>

          {/* Navigation Dots */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute right-8 md:right-12 bottom-8 md:bottom-12 flex flex-col gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-white/90 shadow-lg" />
            <div className="w-3 h-3 rounded-full bg-white/30 shadow-lg" />
            <div className="w-3 h-3 rounded-full bg-white/30 shadow-lg" />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div
              key="modal"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-full max-w-lg">
                <button
                  onClick={closeModal}
                  className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg hover:scale-105 transition"
                  aria-label="Close contact form"
                >
                  &times;
                </button>
                <HeroContactForm onClose={closeModal} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
