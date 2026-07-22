import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Badge from "./Badge";
import DishImage from "./DishImage";
import type { Dish } from "@/types";

interface DishCardProps {
  dish: Dish;
  index: number;
}

function DishCard({ dish, index }: DishCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        to={`/dish/${dish.id}`}
        className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`View ${dish.name} details`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <DishImage
            src={dish.image}
            alt={dish.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-text-secondary">
            <Clock size={14} aria-hidden="true" />
            <span className="text-xs font-medium">{dish.time} хв</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-heading text-lg font-semibold text-text-primary">
            {dish.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-text-secondary">
            {dish.description}
          </p>

          {dish.badges.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {dish.badges.slice(0, 3).map((badge) => (
                <Badge key={badge} type={badge} />
              ))}
            </div>
          )}

          <div className="mt-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-gold transition-colors group-hover:bg-gold/20">
              ❤️ Приготуй мені це
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default DishCard;
