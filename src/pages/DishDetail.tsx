import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, UtensilsCrossed, ArrowLeft } from "lucide-react";
import Badge from "@/components/Badge";
import DishImage from "@/components/DishImage";
import PageTransition from "@/components/PageTransition";
import { getDishById } from "@/data/dishes";
import { GOOGLE_FORM_BASE_URL } from "@/utils/constants";

function DishDetail() {
  const { dishId } = useParams<{ dishId: string }>();
  const navigate = useNavigate();
  const dish = getDishById(dishId ?? "");

  if (!dish) {
    return (
      <PageTransition>
        <div className="flex min-h-[60dvh] items-center justify-center">
          <div className="text-center">
            <p className="font-heading text-2xl text-text-primary">
              Страву не знайдено
            </p>
            <div className="mt-4">
              <button
                onClick={() => navigate("/menu")}
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
              >
                <ArrowLeft size={18} />
                Назад до меню
              </button>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  const orderUrl = `${GOOGLE_FORM_BASE_URL}${encodeURIComponent(dish.name)}`;

  return (
    <PageTransition>
      <div className="pb-16">
        {/* Hero Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/7]">
          <DishImage
            src={dish.image}
            alt={dish.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute left-4 top-4">
            <button
              onClick={() => navigate("/menu")}
              className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-sm font-medium text-text-secondary backdrop-blur-sm transition-colors hover:text-text-primary"
            >
              <ArrowLeft size={18} />
              Меню
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-2xl pt-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              {dish.name}
            </h1>

            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              {dish.description}
            </p>

            {/* Meta */}
            <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Clock size={16} aria-hidden="true" />
                {dish.time} хв
              </span>
              <span className="inline-flex items-center gap-1.5">
                <UtensilsCrossed size={16} aria-hidden="true" />
                {dish.ingredients?.length ?? 0} інгредієнтів
              </span>
            </div>

            {/* Badges */}
            {dish.badges.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {dish.badges.map((badge) => (
                  <Badge key={badge} type={badge} />
                ))}
              </div>
            )}

            {/* Ingredients */}
            {dish.ingredients && dish.ingredients.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-3 font-heading text-xl font-semibold text-text-primary">
                  Інгредієнти
                </h2>
                <ul className="grid grid-cols-2 gap-2">
                  {dish.ingredients.map((ingredient) => (
                    <li
                      key={ingredient}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Order Button */}
            <motion.div className="mt-10" whileTap={{ scale: 0.97 }}>
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gold bg-gold px-8 py-4 font-body text-base font-semibold text-background transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Приготуй мені це ❤️
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

export default DishDetail;
