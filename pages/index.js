import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.title = "PixelWard | Privacy. Protected.";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pixel-pink via-fuchsia-500 to-pixel-blue text-white flex flex-col justify-center items-center relative">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 1.2 }}
          className="text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl animate-pulse">
            PixelWard
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Defend your identity with AI-powered image protection that adapts
            before the internet sees it.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-white text-pixel-pink font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-pink-300 transition duration-300"
          >
            Coming Soon
          </motion.button>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/40 to-transparent animate-pulse"></div>

      <footer className="text-center text-white text-sm mt-16 opacity-80">
        <p>© 2025 PixelWard™ — Created by Khalil Dancy</p>
        <p>
          Contact:{" "}
          <a href="mailto:kdacada@pixelward.com" className="underline">
            kdacada@pixelward.com
          </a>
        </p>
      </footer>
    </div>
  );
}
