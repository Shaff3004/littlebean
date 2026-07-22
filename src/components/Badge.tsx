import type { BadgeType } from "@/types";

const badgeConfig: Record<BadgeType, { label: string; emoji: string }> = {
  chef: { label: "Вибір шефа", emoji: "⭐" },
  favorite: { label: "Мамин улюблений", emoji: "❤️" },
  pregnancy: { label: "Для вагітних", emoji: "👶" },
  healthy: { label: "Корисно", emoji: "🥦" },
  new: { label: "Новинка", emoji: "🔥" },
  quick: { label: "Швидко", emoji: "⚡" },
  seasonal: { label: "Сезонне", emoji: "🍓" },
};

interface BadgeProps {
  type: BadgeType;
}

function Badge({ type }: BadgeProps) {
  const config = badgeConfig[type];

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-text-secondary transition-colors">
      <span aria-hidden="true">{config.emoji}</span>
      <span>{config.label}</span>
    </span>
  );
}

export default Badge;
