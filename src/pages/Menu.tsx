import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import DishCard from "@/components/DishCard";
import PageTransition from "@/components/PageTransition";
import { categories } from "@/data/categories";
import { getDishesByCategory } from "@/data/dishes";
import type { CategoryId } from "@/types";

function Menu() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<CategoryId>("breakfast");
  const dishes = getDishesByCategory(activeCategory);

  return (
    <PageTransition>
      <div className="pb-16 pt-6">
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-card hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <ArrowLeft size={18} />
            <span>На головну</span>
          </button>
        </div>

        <h1 className="mb-6 text-center font-heading text-3xl font-bold text-text-primary">
          Наше Меню
        </h1>

        {/* Category Tabs */}
        <nav aria-label="Menu categories" className="mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "border border-gold bg-gold/15 text-gold"
                    : "border border-border bg-card text-text-secondary hover:border-gold/30 hover:text-text-primary"
                }`}
                aria-pressed={activeCategory === category.id}
              >
                <span aria-hidden="true">{category.emoji}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Active Category Header */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p className="mb-6 text-center text-sm text-text-muted">
            {categories.find((c) => c.id === activeCategory)?.description}
          </p>

          {/* Dish Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {dishes.map((dish, index) => (
              <DishCard key={dish.id} dish={dish} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default Menu;
