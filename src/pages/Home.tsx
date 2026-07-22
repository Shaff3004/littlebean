import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StorkIcon from "@/components/StorkIcon";
import PageTransition from "@/components/PageTransition";

function Home() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <section className="flex min-h-[85dvh] flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
            <StorkIcon size={72} className="text-gold" />
          </div>
          <h1 className="font-heading text-5xl font-bold tracking-tight text-text-primary sm:text-6xl">
            Little Bean
            <span className="block text-gold">Café</span>
          </h1>
          <p className="mt-4 text-lg font-light tracking-wide text-text-secondary">
            Створено з любов'ю
          </p>
          <p className="mt-2 text-sm text-text-muted">
            Для Мами та Малюка
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <button
            onClick={() => navigate("/menu")}
            className="inline-flex items-center gap-3 rounded-full border border-gold bg-gold/10 px-8 py-4 text-base font-medium text-gold transition-all duration-300 hover:bg-gold hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Відкрити меню
          </button>
        </motion.div>
      </section>
    </PageTransition>
  );
}

export default Home;
