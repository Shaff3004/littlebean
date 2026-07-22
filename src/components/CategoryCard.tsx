import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { CategoryInfo } from "@/types";

interface CategoryCardProps {
  category: CategoryInfo;
  index: number;
}

function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        to={`/category/${category.id}`}
        className="group block rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/30 hover:bg-card-hover hover:shadow-lg hover:shadow-gold/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`Browse ${category.name} dishes`}
      >
        <motion.div
          className="mb-4 text-4xl"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {category.emoji}
        </motion.div>
        <h3 className="font-heading text-xl font-semibold text-text-primary">
          {category.name}
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          {category.description}
        </p>
      </Link>
    </motion.div>
  );
}

export default CategoryCard;
